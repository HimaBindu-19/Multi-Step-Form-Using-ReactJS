import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StepThree from './StepThree';

describe('StepThree Component', () => {
  test('renders confirmation details', () => {
    const formData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      address1: '123 Main St',
      address2: 'Apt 4B',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    };
    render(<StepThree prevStep={() => {}} formData={formData} />);
    expect(screen.getByText(/Name: John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Email: john.doe@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone: 1234567890/i)).toBeInTheDocument();
    expect(screen.getByText(/Address Line 1: 123 Main St/i)).toBeInTheDocument();
    expect(screen.getByText(/Address Line 2: Apt 4B/i)).toBeInTheDocument();
    expect(screen.getByText(/City: Anytown/i)).toBeInTheDocument();
    expect(screen.getByText(/State: CA/i)).toBeInTheDocument();
    expect(screen.getByText(/Zip Code: 12345/i)).toBeInTheDocument();
  });

  test('submits the form and shows alert', () => {
    const formData = { /* Your form data here */ };
    render(<StepThree prevStep={() => {}} formData={formData} />);
    fireEvent.click(screen.getByText('Submit'));
    // Check that form submission triggers an alert or other actions
    expect(screen.getByText('Form submitted successfully!')).toBeInTheDocument();
  });
});
