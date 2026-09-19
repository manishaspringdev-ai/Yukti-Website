// Serverless API Handler: /api/google-reviews
// Supports Vercel, Netlify, and standard Node.js serverless functions

export default async function handler(req, res) {
  // Set CORS and JSON headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(200).json({
      success: false,
      message: 'Google Maps API Key or Place ID not configured in server environment variables.',
      fallback: true
    });
  }

  try {
    // 1. Primary: Google Places API (New) - Official Endpoint
    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews,googleMapsUri'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Places API (New) error:', response.status, errorText);
      
      // Fallback attempt: Google Places Legacy API Details
      const legacyUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=name,rating,user_ratings_total,reviews,url&key=${encodeURIComponent(apiKey)}`;
      const legacyRes = await fetch(legacyUrl);
      const legacyData = await legacyRes.json();

      if (legacyData.status === 'OK' && legacyData.result) {
        const place = legacyData.result;
        const mappedReviews = (place.reviews || []).map((rev, idx) => ({
          id: rev.time || idx,
          author: rev.author_name || 'Google Reviewer',
          avatar: rev.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(rev.author_name || 'G')}&background=0D8ABC&color=fff`,
          rating: rev.rating || 5,
          review: rev.text || '',
          date: rev.relative_time_description || 'Recent',
          tag: 'Google Verified Review',
          googleMapsUrl: rev.author_url || place.url || 'https://maps.google.com',
          verified: true
        }));

        res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
        return res.status(200).json({
          success: true,
          source: 'google_places_api_legacy',
          displayName: place.name || 'Yukti Software',
          overallScore: place.rating || 4.9,
          totalReviews: place.user_ratings_total || 128,
          googleMapsUri: place.url || 'https://maps.google.com',
          reviews: mappedReviews
        });
      }

      return res.status(200).json({
        success: false,
        message: 'Unable to fetch from Google Places API',
        fallback: true
      });
    }

    const data = await response.json();

    const mappedReviews = (data.reviews || []).map((rev, idx) => ({
      id: rev.name || rev.id || idx,
      author: rev.authorAttribution?.displayName || 'Google Reviewer',
      avatar: rev.authorAttribution?.photoUri || `https://ui-avatars.com/api/?name=${encodeURIComponent(rev.authorAttribution?.displayName || 'G')}&background=0D8ABC&color=fff`,
      rating: rev.rating || 5,
      review: rev.text?.text || rev.originalText?.text || '',
      date: rev.relativePublishTimeDescription || 'Recent',
      tag: 'Google Verified Review',
      googleMapsUrl: rev.googleMapsUri || rev.authorAttribution?.uri || data.googleMapsUri || 'https://maps.google.com',
      verified: true
    }));

    // Cache the response for 24 hours to reduce API quota consumption
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');

    return res.status(200).json({
      success: true,
      source: 'google_places_api_new',
      displayName: data.displayName?.text || 'Yukti Software',
      overallScore: data.rating || 4.9,
      totalReviews: data.userRatingCount || 128,
      googleMapsUri: data.googleMapsUri || 'https://maps.google.com',
      reviews: mappedReviews
    });
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return res.status(200).json({
      success: false,
      message: error.message || 'Internal Server Error',
      fallback: true
    });
  }
}
