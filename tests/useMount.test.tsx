import { renderHook } from '@testing-library/react-hooks';
import { useMount } from '../src/hooks/useMount';

describe('useMount', () => {
  it('should call callback on mount', function () {
    const fn = jest.fn();
    const hook = renderHook(() => useMount(fn));
    expect(fn).toHaveBeenCalledTimes(1);
    hook.unmount();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
