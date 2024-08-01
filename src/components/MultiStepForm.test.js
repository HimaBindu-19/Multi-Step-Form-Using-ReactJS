import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MultiStepForm from './MultiStepForm';

describe('MultiStepForm Component', () => {
  test('renders Step 1 correctly', () => {
    render(<MultiStepForm />);
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  test('navigates to Step 2 on clicking "Next"', () => {
    render(<MultiStepForm />);
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Address Information')).toBeInTheDocument();
  });

  test('disables "Back" button on Step 1', () => {
    render(<MultiStepForm />);
    expect(screen.getByText('Back')).toBeDisabled();
  });

  test('disables "Next" button on Step 3', () => {
    render(<MultiStepForm />);
    fireEvent.click(screen.getByText('Next')); // Navigate to Step 2
    fireEvent.click(screen.getByText('Next')); // Navigate to Step 3
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
