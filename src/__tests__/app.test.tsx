import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('App', () => {
  it('must render App', () => {
    render(<App />);

    expect(screen.getByText('bbb test')).toBeInTheDocument();
  });
});
