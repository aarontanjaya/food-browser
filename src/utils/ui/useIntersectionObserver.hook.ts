import { noop } from 'lodash';
import { useEffect, type RefObject } from 'react';

export type UseIntersectionObserverProps<T extends Element> = {
  callback: () => void;
  element: RefObject<T | null> | T | null;
  enabled: boolean;
  threshold?: number;
};
/**
 * Observe an element's resize events
 *
 * @example
 * ```ts
 * useIntersectionObserver({
 *   element: element, // or a ref
 *   callback: useCallback((entry) => {
 *     // do something
 *   }, [])
 *   loading: isLoading // callbackloading
 *   enabled: true // whether to enable callback or not
 * });
 * ```
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API Resize Observer API}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry ResizeObserverEntry}
 */

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
export default function useIntersectionObserver<T extends Element>({
  callback,
  element,
  enabled,
  threshold = 0.5,
}: UseIntersectionObserverProps<T>) {
  useEffect(() => {
    const observedElement = element && 'current' in element ? element.current : element;
    if (!enabled || !observedElement) return noop;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && entries[0].intersectionRatio > threshold) {
          callback();
        }
      },
      {
        threshold,
      },
    );

    observer.observe(observedElement);

    return () => {
      observer.unobserve(observedElement);
      observer.disconnect();
    };
  }, [callback, enabled, threshold, element]);
}
