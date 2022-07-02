import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useWindowWidth from './use-window-width';

describe('useWindowWidth', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useWindowWidth());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
