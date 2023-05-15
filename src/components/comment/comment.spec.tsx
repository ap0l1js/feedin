import { fireEvent, render, screen } from '@testing-library/react';
import { Comment } from '.';

describe('Comment', () => {
  it('must render correctly content', () => {
    render(
      <Comment
        content="teste 1"
        onDeleteComment={jest.fn()}
      />,
    );

    expect(screen.getByText('teste 1')).toBeInTheDocument();
  });

  it('must execute onDelete when delete a comment', () => {
    const mockOnDelete = jest.fn();

    render(
      <Comment
        content="teste 1"
        onDeleteComment={mockOnDelete}
      />,
    );

    const deleteButton = screen.getByTestId('deleteComment');

    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalled();
  });
});
