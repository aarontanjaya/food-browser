import { useCallback, useState } from 'react';

export default function useToggleValue<T>(initialValue: T) {
  const [value, setValue] = useState<T | null>(initialValue);

  const toggleValue = useCallback(
    (val: T) => {
      if (value === val) {
        setValue(null);
        return;
      }

      setValue(val);
    },
    [value],
  );

  return { value, toggleValue };
}
