import { useState, useEffect } from 'react';
import { siteData } from '../data';

const CACHE_KEY = 'yukti_google_reviews_cache_v1';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours caching

export function useGoogleReviews() {
  const fallbackData = siteData.googleReviews;

  const [reviewsData, setReviewsData] = useState(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS && parsed.data?.reviews?.length > 0) {
          return {
            ...parsed.data,
            isGoogleLive: true,
            isLoading: false
          };
        }
      }
    } catch (e) {
      // Local storage unavailable or disabled
    }

    // Default to fallback data
    return {
      title: fallbackData.title,
      subtitle: fallbackData.subtitle,
      overallScore: fallbackData.overallScore,
      totalReviews: fallbackData.totalReviews,
      googleMapsUri: "https://maps.google.com",
      reviews: fallbackData.reviews,
      isGoogleLive: false,
      isLoading: true
    };
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchReviews() {
      try {
        const response = await fetch('/api/google-reviews');
        if (!response.ok) {
          throw new Error(`API responded with status ${response.status}`);
        }

        const json = await response.json();

        if (isMounted) {
          if (json.success && Array.isArray(json.reviews) && json.reviews.length > 0) {
            const dynamicPayload = {
              title: fallbackData.title,
              subtitle: fallbackData.subtitle,
              overallScore: Number(json.overallScore || fallbackData.overallScore),
              totalReviews: Number(json.totalReviews || fallbackData.totalReviews),
              googleMapsUri: json.googleMapsUri || "https://maps.google.com",
              reviews: json.reviews,
              isGoogleLive: true,
              isLoading: false
            };

            setReviewsData(dynamicPayload);

            try {
              localStorage.setItem(CACHE_KEY, JSON.stringify({
                timestamp: Date.now(),
                data: dynamicPayload
              }));
            } catch (e) {
              // Ignore localStorage quota errors
            }
          } else {
            // Fallback gracefully without breaking UI
            setReviewsData(prev => ({
              ...prev,
              isLoading: false,
              isGoogleLive: false
            }));
          }
        }
      } catch (err) {
        if (isMounted) {
          console.warn('Google Reviews live fetch fallback active:', err.message);
          setReviewsData(prev => ({
            ...prev,
            isLoading: false,
            isGoogleLive: false
          }));
        }
      }
    }

    fetchReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  return reviewsData;
}
