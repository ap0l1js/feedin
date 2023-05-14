import { render, screen } from '@testing-library/react';
import { Header } from './index';

describe('Header', () => {
  it('must render correctly header', () => {
    render(<Header />);

    expect(screen.getByText('Feed')).toBeInTheDocument();
    expect(screen.getByText('In')).toBeInTheDocument();
  });
});
