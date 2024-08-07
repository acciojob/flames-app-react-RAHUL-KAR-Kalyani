// App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders FLAMES Game', () => {
  render(<App />);
  expect(screen.getByText(/FLAMES Game/i)).toBeInTheDocument();
});

test('calculates the relationship correctly', () => {
  render(<App />);
  
  const input1 = screen.getByTestId('input1');
  const input2 = screen.getByTestId('input2');
  const calculateButton = screen.getByTestId('calculate_relationship');
  const answer = screen.getByTestId('answer');

  fireEvent.change(input1, { target: { value: 'Alice' } });
  fireEvent.change(input2, { target: { value: 'Bob' } });
  fireEvent.click(calculateButton);

  expect(answer).toHaveTextContent(/Enemy/i);
});

test('displays "Please Enter valid input" for blank inputs', () => {
  render(<App />);
  
  const calculateButton = screen.getByTestId('calculate_relationship');
  const answer = screen.getByTestId('answer');

  fireEvent.click(calculateButton);

  expect(answer).toHaveTextContent(/Please Enter valid input/i);
});

test('clears the input fields and result', () => {
  render(<App />);

  const input1 = screen.getByTestId('input1');
  const input2 = screen.getByTestId('input2');
  const clearButton = screen.getByTestId('clear');
  const answer = screen.getByTestId('answer');

  fireEvent.change(input1, { target: { value: 'Alice' } });
  fireEvent.change(input2, { target: { value: 'Bob' } });
  fireEvent.click(clearButton);

  expect(input1.value).toBe('');
  expect(input2.value).toBe('');
  expect(answer).toHaveTextContent('');
});
