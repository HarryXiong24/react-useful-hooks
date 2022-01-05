import { act, renderHook } from '@testing-library/react-hooks';

import { useCount } from '../src/hooks/useCount';

describe('useCount', () => {
  it('should work correctly', function () {
    const hook = renderHook(() => useCount(3, 1, 10));

    const res = hook.result;

    expect(res.current.current).toEqual(3);

    act(() => res.current.inc(2));

    expect(res.current.current).toEqual(5);

    // hook.result.current.inc(5.1);

    // expect(hook.result.current).toEqual(10);

    // hook.result.current.dec(2);

    // expect(hook.result.current.current).toEqual(8);
  });
});
