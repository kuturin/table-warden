import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Create Character link', () => {
  render(<App />);
  const createCharacterLink = screen.getByText(/Create Character/i);
  expect(createCharacterLink).toBeInTheDocument();
});

test('renders Go to characters\' list link', () => {
  render(<App />);
  const characterListLink = screen.getByText(/Go to characters' list/i);
  expect(characterListLink).toBeInTheDocument();
});