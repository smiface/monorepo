import { render } from '@testing-library/react';

import TestLiba from './test-liba';

describe('TestLiba', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestLiba />);
    expect(baseElement).toBeTruthy();
  });
});
