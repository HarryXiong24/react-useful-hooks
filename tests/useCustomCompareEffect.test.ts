import { renderHook } from '@testing-library/react-hooks';
import { useCustomCompareEffect } from '../src/hooks/useCustomCompareEffect';
import equal from 'fast-deep-equal';
describe('useCustomCompareEffect', () => {
  it('should run effect every time rerender, when compare fn return false', function () {
    const fn = jest.fn();
    const initialProps = {
      deps: [1, { name: 'chen' }],
    };
    const hook = renderHook(
      ({ deps }: { deps: any[] }) =>
        useCustomCompareEffect(fn, deps, () => false),
      { initialProps }
    );
    expect(fn).toHaveBeenCalledTimes(1);
    hook.rerender(initialProps);
    expect(fn).toHaveBeenCalledTimes(2);
  });
  it('should not run effect when compare return true', function () {
    const fn = jest.fn();
    const initialProps = {
      deps: [2, { name: 'chen' }] as [number, { name: string }],
    };
    const hook = renderHook(
      ({ deps }: { deps: any[] }) => useCustomCompareEffect(fn, deps, equal),
      { initialProps }
    );
    expect(fn).toHaveBeenCalledTimes(1);
    hook.rerender({
      deps: [2, { name: 'chen' }],
    });
    expect(fn).toHaveBeenCalledTimes(1);
    hook.rerender({
      deps: [2, { name: 'liang' }],
    });
    expect(fn).toHaveBeenCalledTimes(2);
  });
  it('should equal', function () {
    expect(equal({}, {})).toBeTruthy();
  });
});
