import noop from 'lodash/noop';
import { useEffect, type RefObject } from 'react';

export type UseResizeObserverProps<T extends Element> = {
  box?: ResizeObserverBoxOptions;
  callback: (entry: ResizeObserverEntry) => void;
  element: RefObject<T | null> | T | null;
};

/**
 * Observe an element's resize events
 *
 * @example
 * ```ts
 * useResizeObserver({
 *   element: document.body, // or a ref
 *   callback: useCallback((entry) => {
 *     // do something
 *   }, [])
 * });
 * ```
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API Resize Observer API}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry ResizeObserverEntry}
 */
export default function useResizeObserver<T extends Element>({ box, callback, element }: UseResizeObserverProps<T>) {
  useEffect(() => {
    const observedElement = element && 'current' in element ? element.current : element;

    if (!observedElement) {
      return noop;
    }

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === observedElement) {
          callback(entry);
        }
      });
    });

    observer.observe(observedElement, { box });

    return () => {
      observer.unobserve(observedElement);
      observer.disconnect();
    };
  }, [box, callback, element]);
}
