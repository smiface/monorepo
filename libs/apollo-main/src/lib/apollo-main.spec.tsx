import { render } from '@testing-library/react';

import ApolloMain from './apollo-main';

describe('ApolloMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApolloMain />);
    expect(baseElement).toBeTruthy();
  });
});
