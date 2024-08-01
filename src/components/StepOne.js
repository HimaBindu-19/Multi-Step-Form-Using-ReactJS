import React from 'react';

const StepOne = ({ nextStep, handleChange, formData, errors }) => {
  const handleNext = (e) => {
    e.preventDefault();
    // Basic validation before moving to the next step
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out all fields.');
      return;
    }
    nextStep();
  };

  return (
    <div className="form-container">
      <h2>Personal Information</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange('name')}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={handleChange('phone')}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>
        <div className="form-actions">
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
