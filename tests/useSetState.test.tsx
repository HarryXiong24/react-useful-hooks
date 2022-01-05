import { useSetState } from '../src/hooks/useSetState';
import { act, renderHook } from '@testing-library/react-hooks';
import { sleep } from './utils';

describe('useSetState', () => {
  it('must receive an object as state, and can update state always use latest state like this.setState', function () {
    const data = renderHook(() =>
      useSetState({
        name: 'chen',
      })
    );
    expect(data.result.current[0].name).toEqual('chen');
    act(() => {
      data.result.current[1]({
        name: 'liang',
      });
    });
    expect(data.result.current[0].name).toEqual('liang');
  });
  it('should handle async env and keep latest state', async function () {
    const data = renderHook(() => useSetState({ name: 0 }));
    expect(data.result.current[0].name).toEqual(0);
    // 每秒触发一次延迟三秒的加1，持续2秒  捕获了过时的变量的话会是1，否则正确的2
    setTimeout(() => {
      data.result.current[1]({ name: data.result.current[0].name + 1 });
    }, 100);
    setTimeout(() => {
      data.result.current[1]({ name: data.result.current[0].name + 1 });
    }, 200);
    await data.wait(() => {
      expect(data.result.current[0].name).toEqual(2);
    });
  });
});
