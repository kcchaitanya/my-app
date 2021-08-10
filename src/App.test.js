import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Enter your details text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter your details/i);
  expect(linkElement).toBeInTheDocument();
});
