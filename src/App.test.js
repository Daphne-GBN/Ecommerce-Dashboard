import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TechStore', () => {
  render(<App />);

  const element = screen.getByText(/TechStore/i);

  expect(element).toBeInTheDocument();
});