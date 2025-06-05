// LoginValidation.js

// Function to validate email and password
export const validateLogin = ({ email, password }) => {
    let errors = {};

    // Email validation: simple pattern check
    if (!email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
    }

    // Password validation: checking for minimum length
    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }

    return errors;
};

