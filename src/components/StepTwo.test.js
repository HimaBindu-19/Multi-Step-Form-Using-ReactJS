import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StepTwo from './StepTwo';

describe('StepTwo Component', () => {
  test('renders address fields correctly', () => {
    render(<StepTwo prevStep={() => {}} nextStep={() => {}} formData={{}} />);
    expect(screen.getByLabelText(/Address Line 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address Line 2/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
  });

  test('validates address fields', () => {
    render(<StepTwo prevStep={() => {}} nextStep={() => {}} formData={{}} />);
    fireEvent.click(screen.getByText('Next')); // Trigger validation
    expect(screen.getByText('Address Line 1 is required')).toBeInTheDocument();
    expect(screen.getByText('City is required')).toBeInTheDocument();
    expect(screen.getByText('State is required')).toBeInTheDocument();
    expect(screen.getByText('Zip Code is required')).toBeInTheDocument();
  });
});
