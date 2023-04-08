import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const scheduleHeader = screen.getByText(/Schedules/i);
  expect(scheduleHeader).toBeInTheDocument();
});
