import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the TextUtils navigation', () => {
  render(<App />);
  expect(screen.getByText('TextUtils')).toBeInTheDocument();
  expect(screen.getByText('About TextUtils')).toBeInTheDocument();
});

test('shows the text form heading clearly in dark mode', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('checkbox', { name: /enable dark mode/i }));

  const heading = screen.getByRole('heading', { name: /enter the text to analyze/i });
  expect(heading).toHaveStyle({ color: 'white' });
});
