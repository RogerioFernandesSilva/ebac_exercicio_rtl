// PostComments.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostComments from './index';

describe('PostComments Component', () => {
  test('should render the comment form', () => {
    render(<PostComments />);
    expect(screen.getByTestId('comment-textarea')).toBeInTheDocument();
    expect(screen.getByTestId('comment-button')).toBeInTheDocument();
  });

  test('should add a single comment', () => {
    render(<PostComments />);
    const textarea = screen.getByTestId('comment-textarea');
    const button = screen.getByTestId('comment-button');

    fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
  });

  test('should add two comments sequentially', () => {
    render(<PostComments />);
    const textarea = screen.getByTestId('comment-textarea');
    const button = screen.getByTestId('comment-button');

    fireEvent.change(textarea, { target: { value: 'Comentário 1' } });
    fireEvent.click(button);

    fireEvent.change(textarea, { target: { value: 'Comentário 2' } });
    fireEvent.click(button);

    expect(screen.getByText('Comentário 1')).toBeInTheDocument();
    expect(screen.getByText('Comentário 2')).toBeInTheDocument();
  });
});