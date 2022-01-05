import { createMemo } from '../src/hooks/createMemo';
import { renderHook } from '@testing-library/react-hooks';

describe('createMemo', () => {
  it('should wrap a function like original fn and cache value', function () {
    const fn = jest.fn().mockImplementation((a: number, b: number) => a + b);
    const useFn = createMemo(fn);
    const hook = renderHook<{ args: number[] }, number>(
      (props) => useFn(...props.args),
      {
        initialProps: {
          args: [1, 2],
        },
      }
    );
    expect(hook.result.current).toEqual(3);
    expect(fn).toHaveBeenCalledTimes(1);
    hook.rerender({
      args: [1, 2],
    });
    // the above two dependencyList of [1,2] are equal,so it will use cached value,and not call fn
    expect(fn).toHaveBeenCalledTimes(1);
    hook.rerender({
      args: [1, 3],
    });
    expect(fn).toHaveBeenCalledTimes(2);
  });
  it("if args include object or array, it can't cache", function () {
    type Props = {
      from: number;
      to: number;
    };
    const fn = jest.fn(({ from, to }: Props) => {
      return from + to;
    });
    const useFn = createMemo(fn);
    const hook = renderHook(useFn, {
      initialProps: {
        from: 1,
        to: 2,
      },
    });
    expect(hook.result.current).toEqual(3);
    expect(fn).toHaveBeenCalledTimes(1);
    hook.rerender({
      from: 1,
      to: 2,
    });
    expect(hook.result.current).toEqual(3);
    expect(fn).toHaveBeenCalledTimes(2); // can not cache object literals value
  });
});
