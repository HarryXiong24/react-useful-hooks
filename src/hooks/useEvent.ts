import { useEffect } from 'react';

export function useEvent<K extends keyof HTMLElementEventMap>(
  eventName: K,
  handler: (ev: HTMLElementEventMap[K]) => any,
  getTarget: () => HTMLElement | Window = () => window,
  options: boolean | EventListenerOptions = true
) {
  useEffect(() => {
    const target = getTarget();
    if (!target) {
      return;
    }
    target.addEventListener(eventName, handler as any, options);
    return () => {
      target.removeEventListener(eventName, handler as any, options);
    };
  }, [eventName, handler, getTarget, options]);
}
