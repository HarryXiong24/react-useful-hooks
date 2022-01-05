import { useCallback, useState } from 'react';

export function useCount(
  initialValue: number,
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER
) {
  if (initialValue > max || initialValue < min) {
    throw new Error('');
  }
  const [currentNumber, setCurrentNumber] = useState(initialValue);
  const inc = useCallback(
    (delta: number) => {
      let value = currentNumber + delta;
      if (value > max) {
        value = max;
      }
      setCurrentNumber(value);
    },
    [currentNumber, max]
  );
  const dec = useCallback(
    (delta: number) => {
      let value = currentNumber - delta;
      if (value < min) {
        value = min;
      }
      setCurrentNumber(value);
    },
    [currentNumber, min]
  );
  const set = useCallback(
    (val: number) => {
      if (val < min || val > max) {
        throw new Error('should pass valid value');
      }
      setCurrentNumber(val);
    },
    [min, max]
  );
  const reset = useCallback(() => {
    setCurrentNumber(initialValue);
  }, [initialValue]);
  const get = useCallback(() => {
    return currentNumber;
  }, [currentNumber]);
  return {
    current: currentNumber,
    set,
    get,
    inc,
    dec,
    reset,
  };
}
