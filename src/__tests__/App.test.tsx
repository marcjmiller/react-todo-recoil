import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders Todos text', () => {
  const { getByText } = render(<App />);
  const text = getByText(/Todos/);
  expect(text).toBeInTheDocument();
});
