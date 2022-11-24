import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders zero2prod', () => {
  render(<App />);
  const linkElement = screen.getByText(/zero2prod/i);
  expect(linkElement).toBeInTheDocument();
});
