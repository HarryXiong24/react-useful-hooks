import { DependencyList, EffectCallback, useEffect, useRef } from 'react';
import { usePrevious } from './usePrevious';
import isEqual from 'fast-deep-equal/es6/react';

/**
 * @description please pass different reference address of deps, the same reference address can not compare
 */
export function useCustomCompareEffect(
  callback: EffectCallback,
  deps?: DependencyList,
  compareFn: (a: DependencyList, b: DependencyList) => boolean = isEqual
) {
  const prevDeps = useRef<readonly any[] | null | undefined>(null);

  useEffect(() => {
    if (prevDeps.current && deps) {
      const isEqual = compareFn(prevDeps.current, deps);
      if (isEqual) {
        return;
      } else {
        return callback();
      }
    } else {
      return callback();
    }
  });
  useEffect(() => {
    prevDeps.current = deps;
  });
}
