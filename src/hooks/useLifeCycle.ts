import { useEffect } from 'react';

export function useLifeCycle(
  mountCallback: () => void,
  unmountCallback: () => void
) {
  useEffect(() => {
    mountCallback();
    return unmountCallback;
  }, []);
}
