import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the TextUtils navigation', () => {
  render(<App />);
  expect(screen.getByText('TextUtils')).toBeInTheDocument();
  expect(screen.getByText('About TextUtils')).toBeInTheDocument();
});
