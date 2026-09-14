import { useState, useEffect } from 'react';

/**
 * Custom hook for smooth animated number counting.
 * @param {number} end - Target end number
 * @param {number} duration - Animation duration in ms (default 1500)
 * @param {boolean} start - Whether the count-up should start
 * @param {number} decimals - Number of decimal places
 * @returns {string} - Formatted current count
 */
export function useCountUp(end, duration = 1600, start = true, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease-out cubic curve for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * end;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, start]);

  return decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();
}
