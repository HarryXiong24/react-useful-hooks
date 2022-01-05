import { renderHook } from '@testing-library/react-hooks';
import { useLifeCycle } from '../src/hooks/useLifeCycle';

describe('useLifeCycle', () => {
  it('should call mount and unmount', function () {
    const mount = jest.fn();
    const unmount = jest.fn();
    const { unmount: unmountCall } = renderHook(() =>
      useLifeCycle(mount, unmount)
    );
    expect(mount).toHaveBeenCalledTimes(1);
    expect(unmount).not.toHaveBeenCalled();
    unmountCall();
    expect(mount).toHaveBeenCalledTimes(1);
    expect(unmount).toHaveBeenCalledTimes(1);
  });
});
