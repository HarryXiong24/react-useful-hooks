import { renderHook } from '@testing-library/react-hooks';
import { usePrevious } from '../src/hooks/usePrevious';

describe('usePrevious', () => {
  it('should return null when first render,and return previous value on next render', function () {
    const hook = renderHook(
      ({ count }: { count: number }) => usePrevious(count),
      {
        initialProps: {
          count: 1,
        },
      }
    );
    expect(hook.result.current).toBeNull();
    hook.rerender({
      count: 2,
    });
    expect(hook.result.current).toEqual(1);
    hook.rerender({
      count: 3,
    });
    expect(hook.result.current).toEqual(2);
  });
});
