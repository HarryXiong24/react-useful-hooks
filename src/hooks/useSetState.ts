import { useLatest } from './useLeatest';
import { SetStateAction, useCallback, useState } from 'react';

export function useSetState<T>(state: T): [T, (state: T) => void] {
  const [s, set] = useState<T>(state);
  const latestState = useLatest(s);
  return [latestState.current, set];
}
