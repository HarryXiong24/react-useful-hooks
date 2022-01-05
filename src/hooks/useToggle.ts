import { useCallback, useState } from 'react';
export const useToggle = (
  initialValue: boolean
): { state: boolean; toggle: (target?: boolean) => void } => {
  const [state, setState] = useState<boolean>(initialValue);
  const toggle = useCallback(
    (target?: boolean) => {
      if (target === undefined) {
        setState(!state);
      } else {
        setState(target);
      }
    },
    [state]
  );
  return { state, toggle };
};
