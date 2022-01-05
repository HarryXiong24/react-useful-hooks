import { renderHook } from '@testing-library/react-hooks';
import { useEffectOnce } from '../src/hooks/useEffectOnce';

describe('useEffectOnce', () => {
  it('should use effect only once', function () {
    const returnFn = jest.fn();
    const fn = jest.fn().mockReturnValue(returnFn);
    const { rerender, unmount } = renderHook(() =>
      useEffectOnce(() => {
        return fn();
      })
    );
    expect(fn).toHaveBeenCalledTimes(1);
    expect(returnFn).not.toHaveBeenCalled();
    rerender();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(returnFn).not.toHaveBeenCalled();
    rerender();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(returnFn).not.toHaveBeenCalled();
    unmount();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(returnFn).toHaveBeenCalledTimes(1);
  });
});
