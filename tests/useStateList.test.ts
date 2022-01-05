import { act, renderHook } from '@testing-library/react-hooks';
import { useStateList } from '../src/hooks/useStateList';

describe('useStateList', () => {
  it('should perform like normal useState', function () {
    const hook = renderHook(() => useStateList([0, 1, 2, 3, 4, 5]));
    expect(hook.result.current.state).toEqual(0);
    expect(hook.result.current.currentIndex).toEqual(0);
    const prevHandle = (target: number) => {
      act(() => {
        hook.result.current.prev();
      });
      expect(hook.result.current.state).toEqual(target);
      expect(hook.result.current.currentIndex).toEqual(target);
    };
    const nextHandle = (target: number) => {
      act(() => {
        hook.result.current.next();
      });
      expect(hook.result.current.state).toEqual(target);
      expect(hook.result.current.currentIndex).toEqual(target);
    };
    prevHandle(5);
    prevHandle(4);
    nextHandle(5);
    nextHandle(0);
    expect(() => hook.result.current.setStateAt(6)).toThrow();
    expect(() => hook.result.current.setStateAt(-1)).toThrow();
    act(() => hook.result.current.setStateAt(3));
    expect(hook.result.current.state).toEqual(3);
    expect(() => hook.result.current.setState(666)).toThrow();
    act(() => hook.result.current.setState(4));
    expect(hook.result.current.state).toEqual(4);
  });
});
