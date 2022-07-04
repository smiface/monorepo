import { render } from '@testing-library/react';

import RentComponents from './rent-components';

describe('RentComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RentComponents />);
    expect(baseElement).toBeTruthy();
  });
});
