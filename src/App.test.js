import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Enter your details text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter your details/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Contact Form in App', () => {
  render(<App />);
  const country = screen.getByText('Country:');
  const firstName = screen.getByText('First Name:');
  const lastName = screen.getByText('Last12 Name:');
  const email = screen.getByText('Email:');
  const submit = screen.getByText('Submit');

  expect(country).toBeInTheDocument();
  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
});
