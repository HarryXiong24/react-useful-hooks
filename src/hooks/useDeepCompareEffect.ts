import { useCustomCompareEffect } from './useCustomCompareEffect';
import { DependencyList, EffectCallback } from 'react';
import equal from 'fast-deep-equal';

export function useDeepCompareEffect(
  callback: EffectCallback,
  deps?: DependencyList
) {
  return useCustomCompareEffect(callback, deps, equal);
}
