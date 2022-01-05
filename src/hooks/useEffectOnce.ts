import { EffectCallback, useEffect, useRef } from 'react';

export function useEffectOnce(effect: EffectCallback): void {
  // eslint-disable-next-line
    return useEffect(effect, []);
}
