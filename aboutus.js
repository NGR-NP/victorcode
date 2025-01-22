// script.js

// Get the "Learn More" button and the hidden message element
const learnMoreBtn = document.getElementById('learn-more-btn');
const hiddenMessage = document.getElementById('hidden-message');

// Add a click event listener to the button
learnMoreBtn.addEventListener('click', () => {
    // Toggle the 'hidden' class on the hidden message
    hiddenMessage.classList.toggle('hidden');
    
    // Change button text based on the hidden message state
    if (hiddenMessage.classList.contains('hidden')) {
        learnMoreBtn.textContent = 'Learn More';
    } else {
        learnMoreBtn.textContent = 'Show Less';
    }
});
// Function to validate the form inputs
function validateForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if any field is empty
    if (!name || !email || !subject || !message) {
        alert('All fields are required. Please fill them out.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Success feedback
    alert('Thank you for your feedback!');
    // Reset the form
    document.getElementById('feedback-form').reset();
}

// Attach the validation function to the form's submit event
document.getElementById('feedback-form').addEventListener('submit', validateForm);
