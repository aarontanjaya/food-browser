import { useIntersectionObserver, useResizeObserver } from '@utils';
import { type RefObject, useRef } from 'react';

type UseInfiniteContentScrollHandler = {
  box?: ResizeObserverBoxOptions;
  containerRef?: RefObject<HTMLDivElement>;
  enabled: boolean;
  intersectionThreshold: number;
  onLoadMore: () => void;
};

export default function useInfiniteContentScrollHandler({
  box,
  containerRef,
  enabled,
  intersectionThreshold,
  onLoadMore,
}: UseInfiniteContentScrollHandler) {
  const endListRef = useRef<HTMLDivElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const newScrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollContainerRef = containerRef || newScrollContainerRef;

  useIntersectionObserver({
    callback: onLoadMore,
    element: endListRef,
    enabled,
    threshold: intersectionThreshold,
  });

  useResizeObserver({
    box,
    callback: (entry) => {
      const { height } = entry.target.getBoundingClientRect();
      const containerHeight = scrollContainerRef?.current?.getBoundingClientRect()?.height || 0;

      if (enabled && height < containerHeight) {
        onLoadMore();
      }
    },
    element: listContainerRef,
  });

  return { endListRef, listContainerRef, scrollContainerRef };
}
