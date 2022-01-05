import { renderHook } from '@testing-library/react-hooks';
import { useUnmount } from '../src/hooks/useUnmount';

describe('useUnmount', () => {
  it('should call unmount callback when component unmount', function () {
    const fn = jest.fn();
    const hook = renderHook(() => useUnmount(fn));
    expect(fn).toHaveBeenCalledTimes(0);
    hook.unmount();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
