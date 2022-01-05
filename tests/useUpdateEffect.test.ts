import { renderHook } from '@testing-library/react-hooks';
import { useUpdateEffect } from '../src/hooks/useUpdateEffect';

describe('useUpdateEffect', () => {
  it('should call when update', function () {
    const fn = jest.fn();
    const hook = renderHook(
      ({ count }: { count: number }) => useUpdateEffect(fn, [count]),
      {
        initialProps: {
          count: 1,
        },
      }
    );
    expect(fn).not.toHaveBeenCalled();
    hook.rerender({ count: 2 });
    // only call when update
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
