import {
  Dispatch,
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { useToggle } from './useToggle';

// export function useGetSet<T>(state:T) {
//     const stateRef = useRef(state)
//     const {state:sss,toggle} = useToggle(false);
//     const get = useCallback(() => stateRef.current, []);
//     const set = useCallback((state: T) => {
//         stateRef.current = state;
//         toggle()
//     }, [toggle]);
//     return {get,set}
// }
export type StateSetter<S> = (prevState: S) => S;

type InitialStateSetter<S> = () => S;
type InitialHookState<S> = S | InitialStateSetter<S>;
export type HookState<S> = S | StateSetter<S>;
export type ResolvableHookState<S> = S | StateSetter<S> | InitialStateSetter<S>;
export function resolveHookState<S, C extends S>(
  newState: InitialStateSetter<S>
): S;
export function resolveHookState<S, C extends S>(
  newState: StateSetter<S>,
  currentState: C
): S;
export function resolveHookState<S, C extends S>(
  newState: ResolvableHookState<S>,
  currentState?: C
): S;
export function resolveHookState<S, C extends S>(
  newState: ResolvableHookState<S>,
  currentState?: C
): S {
  if (typeof newState === 'function') {
    return (newState as Function)(currentState);
  }

  return newState;
}
const updateReducer = (num: number): number => (num + 1) % 1_000_000;
const useUpdate = () => {
  const [, update] = useReducer(updateReducer, 0);
  return update as () => void;
};
export function useGetSet<S>(
  initialState: InitialHookState<S>
): [() => S, Dispatch<HookState<S>>] {
  const state = useRef(resolveHookState(initialState));
  const update = useUpdate();

  return useMemo(
    () => [
      // get
      () => state.current,
      // set
      (newState: HookState<S>) => {
        state.current = resolveHookState(newState, state.current);
        update();
      },
    ],
    [update]
  );
}
