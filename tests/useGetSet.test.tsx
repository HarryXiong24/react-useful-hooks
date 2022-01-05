import { useGetSet } from '../src/hooks/useGetSet';
import React from 'react';
import { act, render } from '@testing-library/react';
import { fireEvent, waitFor } from '@testing-library/dom';
import { sleep } from './utils';

describe('useGetSet', () => {
  it('get should always return newest value', async function () {
    const Demo1 = () => {
      const [get, set] = useGetSet(0);
      const onClick = () => {
        setTimeout(() => {
          set(get() + 1);
        }, 200);
      };

      return (
        <button id={'test'} onClick={onClick}>
          Clicked: {get()}
        </button>
      );
    };
    const { findByText, getByText } = render(<Demo1 />);
    fireEvent.click(document.getElementById('test')!);
    await sleep(20);
    // click after 20ms
    fireEvent.click(document.getElementById('test')!);
    await findByText(/2/);
  }, 50000);
});
