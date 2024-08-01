import React from 'react';

const StepTwo = ({ nextStep, prevStep, handleChange, formData, errors }) => {
  const handleNext = (e) => {
    e.preventDefault();
    // Basic validation before moving to the next step
    if (!formData.address1 || !formData.city || !formData.state || !formData.zip) {
      alert('Please fill out all required fields.');
      return;
    }
    nextStep();
  };

  return (
    <div className="form-container">
      <h2>Address Information</h2>
      <form>
        <div>
          <label>Address Line 1:</label>
          <input
            type="text"
            value={formData.address1}
            onChange={handleChange('address1')}
            className={errors.address1 ? 'error' : ''}
          />
          {errors.address1 && <span className="error-text">{errors.address1}</span>}
        </div>
        <div>
          <label>Address Line 2:</label>
          <input
            type="text"
            value={formData.address2}
            onChange={handleChange('address2')}
            className={errors.address2 ? 'error' : ''}
          />
          {errors.address2 && <span className="error-text">{errors.address2}</span>}
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={formData.city}
            onChange={handleChange('city')}
            className={errors.city ? 'error' : ''}
          />
          {errors.city && <span className="error-text">{errors.city}</span>}
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            value={formData.state}
            onChange={handleChange('state')}
            className={errors.state ? 'error' : ''}
          />
          {errors.state && <span className="error-text">{errors.state}</span>}
        </div>
        <div>
          <label>Zip Code:</label>
          <input
            type="text"
            value={formData.zip}
            onChange={handleChange('zip')}
            className={errors.zip ? 'error' : ''}
          />
          {errors.zip && <span className="error-text">{errors.zip}</span>}
        </div>
        <div className="form-actions">
          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
