import { useMemo } from 'react';

export function createMemo<Params extends any[], Return>(
  fn: (...args: Params) => Return
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (...args: Params) => useMemo(() => fn(...args), args);
}
