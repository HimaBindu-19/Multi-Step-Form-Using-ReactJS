# Multi-Step-Form-Using-ReactJS
**Assignment: Multi-Step Form with React**
**Objective:**
**Create a responsive multi-step form with three steps, ensuring data validation, error handling, and navigation controls using React.js. The form should persist data to local storage and enforce sequential completion of steps.**
**Requirements:**
1.	Form Structure:
  o	Implement a multi-step form with three steps:
    	Step 1: Personal Information (Name, Email, Phone)
    	Step 2: Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
    	Step 3: Confirmation (Review all entered data)
2.	Navigation and Buttons:
  o	Use tabbed navigation to switch between steps.
  o	Disable the back button on the first step.
  o	Disable the next button on the last step and replace it with a submit button.
3.	Validation:
  o	Implement client-side validation to ensure all fields are filled before allowing navigation to the next step.
  o	Display appropriate error messages if fields are empty or invalid (e.g., email format).
  o	Highlight the fields with errors.
4.	State Management:
  o	Manage form data using React state.
  o	Use hooks like useState and useEffect where appropriate.
  o	Ensure state updates reflect user inputs and form navigation.
5.	Local Storage:
  o	Persist entered data to local storage when the user navigates between steps.
  o	Retrieve and pre-fill form fields if the user revisits the form.
6.	Responsive Design:
  o	Ensure the form is responsive and works well on desktop, tablet, and mobile screens.
  o	Use appropriate CSS and possibly a CSS framework (like Bootstrap or Material UI) for layout and responsiveness.
7.	Bonus Points (Optional):
  o	Implement error handling for network requests (e.g., simulate API calls with setTimeout).
  o	Enhance UX with animations or transitions between steps.
  o	Write unit tests for critical components or validation functions.

**Notes:**
•	This assignment aims to assess your understanding of React state management, form validation, responsive design principles, and local storage usage.
•	Feel free to reach out for clarification or assistance if needed.

## Installation
To get started with this project, follow these steps:
1. Clone the Repository
   ```bash
   git clone https://github.com/your-username/multi-step-form.git
2. Navigate To Project Dir
   cd multi-step-form
3. Install Dependencies
   npm install
4. Start the server
   npm start
5. Run Tests
   npm test
   or
   npm run test:watch

**Note:**
No backend integration: The form submission is simulated and does not include real backend integration.
Form data is not actually submitted: You need to replace the simulated submission logic with actual backend requests if required.
