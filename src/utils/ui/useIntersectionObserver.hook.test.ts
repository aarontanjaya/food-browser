import useIntersectionObserver from './useIntersectionObserver.hook';
import { renderHook } from '@testing-library/react';
import { useRef } from 'react';

const mockObserve = jest.fn();
const mockUnobserve = jest.fn();
const mockDisconnect = jest.fn();

// #region MOCK INTERSECTION OBSERVER
global.IntersectionObserver = class MockIntersectionObserver implements IntersectionObserver {
  root: Element | Document | null;

  rootMargin: string;

  thresholds: readonly number[];

  constructor(
    private callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ) {
    this.observe = this.observe.bind(this);
    this.root = options?.root ?? null;
    this.rootMargin = options?.rootMargin ?? '';

    if (typeof options?.threshold === 'number') {
      this.thresholds = [options?.threshold];
    } else {
      this.thresholds = options?.threshold ?? [];
    }
  }

  // This class' behavior is mocked

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  observe(target: Element): void {
    mockObserve(target);

    // simulate resize
    setTimeout(() => {
      this.callback(
        [
          {
            boundingClientRect: {
              bottom: 0,
              height: 1,
              left: 2,
              right: 3,
              toJSON: jest.fn(),
              top: 4,
              width: 5,
              x: 6,
              y: 7,
            },
            intersectionRatio: 1,
            intersectionRect: {
              bottom: 8,
              height: 9,
              left: 10,
              right: 11,
              toJSON: jest.fn(),
              top: 12,
              width: 13,
              x: 14,
              y: 15,
            },
            isIntersecting: true,
            rootBounds: null,
            target,
            time: 1,
          },
        ],
        this,
      );
    }, 150);
  }

  disconnect = mockDisconnect;

  unobserve = mockUnobserve;
};
// #endregion

describe('useIntersectionObserver', () => {
  it('should observe the provided element', () => {
    // #region ARRANGE
    renderHook(() =>
      useIntersectionObserver({
        callback: jest.fn(),
        element: document.body,
        enabled: true,
      }),
    );
    // #endregion

    // #region ASSERT
    expect(mockObserve).toHaveBeenCalled();
    // #endregion
  });

  it('should unobserve when element changed', () => {
    // #region ARRANGE
    const { rerender } = renderHook(
      (props) =>
        useIntersectionObserver({
          callback: jest.fn(),
          element: props.element,
          enabled: true,
        }),
      {
        initialProps: {
          element: document.body as HTMLElement | null,
        },
      },
    );
    // #endregion

    // #region ACT
    rerender({ element: null });
    // #endregion

    // #region ASSERT
    expect(mockUnobserve).toHaveBeenCalledWith(document.body);
    expect(mockDisconnect).toHaveBeenCalled();
    // #endregion
  });

  it('should handle refs', () => {
    // #region ARRANGE
    const { result } = renderHook(() => useRef<HTMLElement>(document.createElement('div')));

    renderHook(() =>
      useIntersectionObserver({
        callback: jest.fn(),
        element: result.current,
        enabled: true,
      }),
    );
    // #endregion

    // #region ASSERT
    expect(mockObserve).toHaveBeenCalledWith(result.current.current);
    // #endregion
  });

  it('should not observe element if not enabled', () => {
    // #region ARRANGE
    renderHook(() =>
      useIntersectionObserver({
        callback: jest.fn(),
        element: document.body,
        enabled: false,
      }),
    );
    // #endregion

    // #region ASSERT
    expect(mockObserve).not.toHaveBeenCalledWith(document.body);
    // #endregion
  });
});
