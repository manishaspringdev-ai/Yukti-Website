import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element is in viewport.
 * @param {Object} options - IntersectionObserver options
 * @param {boolean} triggerOnce - Whether to trigger only once
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(options = { threshold: 0.15 }, triggerOnce = true) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, triggerOnce]);

  return [ref, isInView];
}
