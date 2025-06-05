// validation.js
export default function validateInfo(values) {
    let errors = {};
  
    // Add validation for first name (should not be empty)
    if (!values.firstName.trim()) {
      errors.firstName = 'First name required';
    }
  
    // Add validation for last name (should not be empty)
    if (!values.lastName.trim()) {
      errors.lastName = 'Last name required';
    }
  
    // Add email validation
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    // Add mobile validation
    if (!values.mobile) {
      errors.mobile = 'Mobile number required';
    } else if (!/^\d{10}$/.test(values.mobile)) {
      errors.mobile = 'Mobile number is invalid';
    }
  
    // Add password validation
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    // Add confirm password validation
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirming password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    return errors;
  }