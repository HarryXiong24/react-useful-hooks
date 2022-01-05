import { act, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '../src/hooks/useToggle';
import { useCallback, useState } from 'react';
describe('useToggle', () => {
  it('should return initial value', async function () {
    const { result, waitForNextUpdate, rerender } = renderHook(() =>
      useToggle(false)
    );
    expect(result.current.state).toEqual(false);
    act(() => result.current.toggle());
    expect(result.current.state).toEqual(true);
    act(() => result.current.toggle(true));
    expect(result.current.state).toEqual(true);
  });
});
