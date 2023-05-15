import { render, screen } from '@testing-library/react';
import { Post } from '.';
import { posts } from '../../data';

describe('Post', () => {
  it('must render correctly post', () => {
    const post = posts[0];

    render(<Post {...post} />);

    expect(screen.getByText(post.author.name)).toBeInTheDocument();
  });
});
