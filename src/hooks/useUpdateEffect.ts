import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export function useUpdateEffect(
  callback: EffectCallback,
  dependency: DependencyList
) {
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      return callback();
    }
  }, dependency);
}
