import { useEffect } from 'react';

export function useMount(callback: () => void) {
  useEffect(() => {
    callback();
  }, []);
}
