import { render } from '@testing-library/react';

import Top from './Top';

describe('Top', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Top />);
    expect(baseElement).toBeTruthy();
  });
});
