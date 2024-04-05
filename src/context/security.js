// Function to sanitize user input to prevent XSS attacks
const sanitizeInput = (input) => {
  // Implement your sanitization logic here
  // Example: Replace '<' and '>' characters with their HTML entities
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

// Function to validate user input
const validateInput = (input) => {
  // Implement your input validation logic here
  // Example: Check if the input contains only alphanumeric characters
  const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
  return alphanumericRegex.test(input);
};

// Function to handle search input before sending to API call
const handleSearchInput = (input, apiCall) => {
  // Sanitize the input to prevent XSS attacks
  const sanitizedInput = sanitizeInput(input);

  // Validate the input
  if (!validateInput(sanitizedInput)) {
      // If input is invalid, return an error or throw an exception
      throw new Error('Invalid input');
  }

  // Call the API function with sanitized input
  return apiCall(sanitizedInput);
};

// Overload function without apiCall parameter
const handleInput = (input) => {

    // If input is empty, consider it as valid
    if (input.trim() === '') {
      return true;
    }

  const sanitizedInput = sanitizeInput(input);

  if (!validateInput(sanitizedInput)) {
    alert('Non-alphanumeric characters detected! Please enter alphanumeric characters only.');
    return false;
      // throw new Error('Invalid input');
  }

  return sanitizedInput;
};

export { handleSearchInput, handleInput };
