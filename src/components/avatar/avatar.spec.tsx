import { render, screen } from '@testing-library/react';
import { Avatar } from '.';

describe('Avatar', () => {
  it('must render correctly src', () => {
    render(<Avatar src="undefined" />);

    const image = screen.getByTestId('picture');

    expect(image).toHaveAttribute('src', 'undefined');
  });
});
