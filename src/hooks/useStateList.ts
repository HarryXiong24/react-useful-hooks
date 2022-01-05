import { useCallback, useRef, useState } from 'react';

export function useStateList<T>(stateList: T[]) {
  const indexRef = useRef(0);
  const [state, setState] = useState<T>(stateList[indexRef.current]);
  const prev = useCallback(() => {
    indexRef.current--;
    if (indexRef.current === -1) {
      indexRef.current = stateList.length - 1;
      setState(stateList[indexRef.current]);
    } else {
      setState(stateList[indexRef.current]);
    }
  }, []);
  const next = useCallback(() => {
    indexRef.current++;
    if (indexRef.current >= stateList.length) {
      indexRef.current = 0;
      setState(stateList[indexRef.current]);
    } else {
      setState(stateList[indexRef.current]);
    }
  }, []);
  const setStateUnique = useCallback((state: T) => {
    const index = stateList.indexOf(state);
    if (index === -1) {
      throw new Error('not valid element');
    } else {
      indexRef.current = index;
      setState(stateList[indexRef.current]);
    }
  }, []);
  const setStateIndex = useCallback((index: number) => {
    if (index < 0 || index >= stateList.length) {
      throw new Error('index out of bound');
    }
    setState(stateList[index]);
  }, []);
  return {
    state,
    prev,
    next,
    setStateAt: setStateIndex,
    setState: setStateUnique,
    currentIndex: indexRef.current,
  };
}
