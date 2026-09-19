import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function googleReviewsDevPlugin(env) {
  return {
    name: 'google-reviews-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/google-reviews', async (req, res) => {
        const apiKey = env.GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY;
        const placeId = env.GOOGLE_PLACE_ID || process.env.GOOGLE_PLACE_ID;

        res.setHeader('Content-Type', 'application/json');

        if (!apiKey || !placeId) {
          res.end(JSON.stringify({
            success: false,
            message: 'Google Maps API Key or Place ID not configured in .env',
            fallback: true
          }));
          return;
        }

        try {
          // Primary: Google Places API (New)
          const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
          const response = await fetch(url, {
            headers: {
              'Content-Type': 'application/json',
              'X-Goog-Api-Key': apiKey,
              'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews,googleMapsUri'
            }
          });

          if (!response.ok) {
            // Secondary Fallback: Google Places Legacy Details
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

              res.end(JSON.stringify({
                success: true,
                source: 'google_places_api_legacy',
                displayName: place.name || 'Yukti Software',
                overallScore: place.rating || 4.9,
                totalReviews: place.user_ratings_total || 128,
                googleMapsUri: place.url || 'https://maps.google.com',
                reviews: mappedReviews
              }));
              return;
            }

            res.end(JSON.stringify({
              success: false,
              message: 'Google Places API returned status ' + response.status,
              fallback: true
            }));
            return;
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

          res.end(JSON.stringify({
            success: true,
            source: 'google_places_api_new',
            displayName: data.displayName?.text || 'Yukti Software',
            overallScore: data.rating || 4.9,
            totalReviews: data.userRatingCount || 128,
            googleMapsUri: data.googleMapsUri || 'https://maps.google.com',
            reviews: mappedReviews
          }));
        } catch (error) {
          res.end(JSON.stringify({
            success: false,
            message: error.message,
            fallback: true
          }));
        }
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), googleReviewsDevPlugin(env)],
    server: {
      port: 3000,
      open: true
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-icons': ['lucide-react'],
            'vendor-confetti': ['canvas-confetti']
          }
        }
      }
    }
  };
});

