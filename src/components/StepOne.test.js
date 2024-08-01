import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StepOne from './StepOne';

describe('StepOne Component', () => {
  test('renders form fields correctly', () => {
    render(<StepOne nextStep={() => {}} formData={{}} />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
  });

  test('displays error messages for invalid input', () => {
    render(<StepOne nextStep={() => {}} formData={{}} />);
    fireEvent.click(screen.getByText('Next')); // Trigger validation
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Phone is required')).toBeInTheDocument();
  });
});
