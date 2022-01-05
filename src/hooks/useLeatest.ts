import { useEffect, useRef } from 'react';

/**
 * 仔细想想为啥这个是latest 用useEffect就是previous值，还是挺机智的
 * @param value
 */
export function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}
