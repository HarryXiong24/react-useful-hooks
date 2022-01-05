import { Dispatch, SetStateAction, useCallback, useState } from 'react';
export function useDefault<T>(initialValue: T | (() => T), defaultValue: T) {
  const [state, setState] = useState<T | null | undefined>(initialValue);
  if (state === null || state === undefined) {
    return [defaultValue, setState] as const;
  }
  return [state, setState] as const;
}
