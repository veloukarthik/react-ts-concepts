import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter Component', () => {
  it('renders counter with initial state', () => {
    render(<Counter />);
    expect(screen.getByText('Counter App')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments counter when plus button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('decrements counter when minus button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    expect(screen.getByText('-5')).toBeInTheDocument();
  });

  it('handles multiple increment operations', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('handles multiple decrement operations', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(screen.getByText('-10')).toBeInTheDocument();
  });

  it('handles mixed increment and decrement operations', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
