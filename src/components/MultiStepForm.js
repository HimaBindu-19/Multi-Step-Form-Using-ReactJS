import React, { useState, useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  const [errors, setErrors] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  // Add validation logic here and set errors accordingly

  switch (step) {
    case 1:
      return (
        <StepOne
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
          errors={errors}
        />
      );
    case 2:
      return (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
          errors={errors}
        />
      );
    case 3:
      return (
        <StepThree
          prevStep={prevStep}
          formData={formData}
        />
      );
    default:
      return null;
  }
};

export default MultiStepForm;
