// Add interactivity if needed
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    // Set opacity to 1 after the DOM is loaded (to make it visible)
    container.style.opacity = '1';
  });

  // Add event listener to the form submission
document.querySelector('.signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Capture the form data
  const formData = {
    first_name: document.getElementById('first-name').value,
    last_name: document.getElementById('last-name').value,
    phone_number: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };

  // Validate first and last name (must not be empty)
  if (!formData.first_name || !formData.last_name) {
    alert("First Name and Last Name are required fields.");
    return; // Stop form submission if names are missing
  }

  // Validate email (must be in a valid format)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return; // Stop form submission if email is invalid
  }

  // Validate phone number (must be exactly 10 digits)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(formData.phone_number)) {
    alert("Please enter a valid 10-digit phone number.");
    return; // Stop form submission if phone number is invalid
  }

  // Validate password (must be at least 8 characters long)
  if (formData.password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return; // Stop form submission if password is too short
  }

  // Log the form data in the console as an object
  console.log({
    first_name: formData.first_name,
    last_name: formData.last_name,
    phone_number: formData.phone_number,
    email: formData.email,
    password: formData.password
  });

  console.table(formData); // Display form data in a table format for better visibility

  // Reset the form after successful submission
  document.querySelector('.signup-form').reset();
});
