import useTimeout from './useTimeout.util';
import { useCallback, useState } from 'react';

/**
 * Synchronize to the variable value after some time the variable does not change.
 * @param value The value to be synchronized. The timer will be reset everytime this changes.
 * @param delay Synchronize to `value` after some milliseconds.
 * @param callback custom callback to be called together with value change
 */
export default function useDebounced<T>(value: T, delay: number, callback?: (value: T) => void): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useTimeout(
    useCallback(() => {
      setDebouncedValue(value);
      callback?.(value);
    }, [value, callback]),
    delay,
  );

  return debouncedValue;
}
