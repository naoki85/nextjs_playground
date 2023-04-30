import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();

    fireEvent.click(screen.getByText('Load Data'));
    // expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(
      () => {
        expect(screen.getByText('Loading...')).toBeInTheDocument();
      },
      { timeout: 5000 },
    );
  });
});
