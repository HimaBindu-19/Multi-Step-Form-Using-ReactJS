import React, { useState } from 'react';

const StepThree = ({ prevStep, formData }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSubmitted(true);
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-container">
      <h2>Confirmation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Personal Information</h3>
          <p className={submitted ? 'submitted-text' : ''}>Name: {formData.name}</p>
          <p className={submitted ? 'submitted-text' : ''}>Email: {formData.email}</p>
          <p className={submitted ? 'submitted-text' : ''}>Phone: {formData.phone}</p>
        </div>
        <div>
          <h3>Address Information</h3>
          <p className={submitted ? 'submitted-text' : ''}>Address Line 1: {formData.address1}</p>
          <p className={submitted ? 'submitted-text' : ''}>Address Line 2: {formData.address2}</p>
          <p className={submitted ? 'submitted-text' : ''}>City: {formData.city}</p>
          <p className={submitted ? 'submitted-text' : ''}>State: {formData.state}</p>
          <p className={submitted ? 'submitted-text' : ''}>Zip Code: {formData.zip}</p>
        </div>
        <div className="form-actions">
          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
