import { useEffect } from 'react';

export function useUnmount(callback: () => void) {
  // eslint-disable-next-line
    useEffect(() => callback, []);
}
