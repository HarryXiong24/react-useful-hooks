import { act, renderHook } from '@testing-library/react-hooks';
import { useDefault } from '../src/hooks/useDefault';

describe('useDefault', () => {
  it('should return default value when state is null or undefined', function () {
    const hook = renderHook(() => useDefault(1, 100));
    expect(hook.result.current[0]).toEqual(1);
    act(() => {
      hook.result.current[1](null);
    });
    expect(hook.result.current[0]).toEqual(100);
  });
});
