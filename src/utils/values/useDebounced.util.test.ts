import useDebounced from './useDebounced.util';
import { act, renderHook } from '@testing-library/react';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('useDebounced', () => {
  it('should have correct initial value', () => {
    // #region ARRANGE
    const initialValue = 5;
    const { result } = renderHook((val) => useDebounced(val, 500), {
      initialProps: initialValue,
    });
    // #endregion

    // #region ASSERT
    expect(result.current).toBe(initialValue);
    // #endregion
  });

  it('should not update the value immediately', () => {
    // #region ARRANGE
    const initialValue = 5;
    const nextValue = 10;
    const { rerender, result } = renderHook((val) => useDebounced(val, 500), {
      initialProps: initialValue,
    });
    // #endregion

    // #region ACT
    act(() => {
      rerender(nextValue);
    });
    // #endregion

    // #region ASSERT
    expect(result.current).toBe(5);
    // #endregion
  });

  it('should not update the value before the time', () => {
    // #region ARRANGE
    const initialValue = 5;
    const nextValue = 10;
    const { rerender, result } = renderHook((val) => useDebounced(val, 500), {
      initialProps: initialValue,
    });
    // #endregion

    // #region ACT
    act(() => {
      rerender(nextValue);
    });
    act(() => {
      jest.advanceTimersByTime(499);
    });
    // #endregion

    // #region ASSERT
    expect(result.current).toBe(5);
    // #endregion
  });

  it('should update debounced value after the delay', () => {
    // #region ARRANGE
    const initialValue = 5;
    const nextValue = 10;
    const { rerender, result } = renderHook((val) => useDebounced(val, 500), {
      initialProps: initialValue,
    });
    // #endregion

    // #region ACT
    act(() => {
      rerender(nextValue);
    });
    act(() => {
      jest.advanceTimersByTime(501);
    });
    // #endregion

    // #region ASSERT
    expect(result.current).toBe(nextValue);
    // #endregion
  });

  it('should not update value if a new change was introduced', () => {
    // #region ARRANGE
    const initialValue = 5;
    const nextValue = 10;
    const goalValue = 15;
    const { rerender, result } = renderHook((val) => useDebounced(val, 500), {
      initialProps: initialValue,
    });
    // #endregion

    // #region ACT
    act(() => {
      rerender(nextValue);
    });
    act(() => {
      jest.advanceTimersByTime(499);
    });
    act(() => {
      rerender(goalValue);
    });
    // #endregion

    // #region ASSERT
    expect(result.current).toBe(initialValue);
    // #endregion
  });

  it('should update to final value some time after final update', () => {
    // #region ARRANGE
    const initialValue = 5;
    const nextValue = 10;
    const goalValue = 15;
    const { rerender, result } = renderHook((val) => useDebounced(val, 500), {
      initialProps: initialValue,
    });
    // #endregion

    // #region ACT
    act(() => {
      rerender(nextValue);
    });
    act(() => {
      jest.advanceTimersByTime(499);
    });
    act(() => {
      rerender(goalValue);
    });
    act(() => {
      jest.advanceTimersByTime(501);
    });
    // #endregion

    // #region ASSERT
    expect(result.current).toBe(goalValue);
    // #endregion
  });
});
