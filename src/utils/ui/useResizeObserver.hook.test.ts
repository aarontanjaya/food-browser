import useResizeObserver from './useResizeObserver.hook';
import { renderHook, waitFor } from '@testing-library/react';
import { useRef } from 'react';

const mockObserve = jest.fn();
const mockUnobserve = jest.fn();
const mockDisconnect = jest.fn();

global.ResizeObserver = class MockResizeObserver implements ResizeObserver {
  constructor(private callback: ResizeObserverCallback) {
    this.observe = this.observe.bind(this);
  }

  observe(target: Element, options?: ResizeObserverOptions | undefined): void {
    mockObserve(target, options);

    // simulate resize
    setTimeout(() => {
      this.callback(
        [
          {
            borderBoxSize: [],
            contentBoxSize: [],
            contentRect: {
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
            devicePixelContentBoxSize: [],
            target,
          },
        ],
        this,
      );
    }, 150);
  }

  disconnect = mockDisconnect;

  unobserve = mockUnobserve;
};

describe('useResizeObserver', () => {
  it('should observe the provided element', () => {
    // #region ARRANGE
    renderHook(() =>
      useResizeObserver({
        callback: jest.fn(),
        element: document.body,
      }),
    );
    // #endregion

    // #region ASSERT
    expect(mockObserve).toHaveBeenCalled();
    // #endregion
  });

  it('should unobserve when element changed', () => {
    // #region ARRANGE
    const { rerender } = renderHook((props) => useResizeObserver({ callback: jest.fn(), element: props.element }), {
      initialProps: {
        element: document.body as HTMLElement | null,
      },
    });
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

    renderHook(() => useResizeObserver({ callback: jest.fn(), element: result.current }));
    // #endregion

    // #region ASSERT
    expect(mockObserve).toHaveBeenCalledWith(result.current.current, { box: undefined });
    // #endregion
  });

  it('should respect box options', () => {
    // #region ARRANGE
    renderHook(() => useResizeObserver({ box: 'content-box', callback: jest.fn(), element: document.body }));
    // #endregion

    // #region ASSERT
    expect(mockObserve).toHaveBeenCalledWith(document.body, { box: 'content-box' });
    // #endregion
  });

  it('should invoke `callback` when the element is resized', async () => {
    // #region ARRANGE
    const mockResizeHandler = jest.fn();

    renderHook(() =>
      useResizeObserver({
        callback: mockResizeHandler,
        element: document.body,
      }),
    );
    // #endregion

    // #region ASSERT
    await waitFor(() => expect(mockResizeHandler).toHaveBeenCalled());
    // #endregion
  });
});
