import React from 'react';
import { useMountedState } from '../src/hooks/useMountedState';
import { render } from '@testing-library/react';
describe('useMountedState', () => {
  it('dd', function () {
    function Test() {
      const isMounted = useMountedState();
      return <div>{isMounted() && 'mounted'}</div>;
    }
    const { getByText, queryByText, rerender } = render(<Test />);
    expect(queryByText('mounted')).toBeFalsy();
    rerender(<Test />);
    expect(getByText('mounted')).toBeTruthy();
  });
});
