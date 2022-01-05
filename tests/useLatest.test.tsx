import { useLatest } from '../src/hooks/useLeatest';
import React, { useState } from 'react';
import { act, render } from '@testing-library/react';
import { fireEvent, waitFor } from '@testing-library/dom';
import { sleep } from './utils';

describe('useLatest', () => {
  it('should always return newest state value', async function () {
    const testFn = jest.fn();
    const Demo = () => {
      const [count, setCount] = React.useState(0);
      const latestCount = useLatest(count);

      function handleAlertClick() {
        setTimeout(() => {
          testFn(latestCount.current);
        }, 400);
      }

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          <button onClick={handleAlertClick}>Show alert</button>
        </div>
      );
    };
    const { queryByText, getByText } = render(<Demo />);

    fireEvent.click(queryByText('Show alert')!);
    fireEvent.click(queryByText('Click me')!);
    fireEvent.click(queryByText('Click me')!);

    await waitFor(() => expect(testFn).toHaveBeenCalledTimes(1));
    expect(testFn).toHaveBeenCalledWith(2);
  });
});
