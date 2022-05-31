import { render } from '@testing-library/react';

import TodoComponents from './todo-components';

describe('TodoComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoComponents />);
    expect(baseElement).toBeTruthy();
  });
});
