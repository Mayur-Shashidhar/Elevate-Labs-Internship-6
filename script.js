// Get form and input elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

// Get error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Email validation regex pattern
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation functions
function validateName() {
    const nameValue = nameInput.value.trim();
    
    if (nameValue === '') {
        showError(nameInput, nameError, 'Name is required');
        return false;
    } else if (nameValue.length < 2) {
        showError(nameInput, nameError, 'Name must be at least 2 characters');
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(nameValue)) {
        showError(nameInput, nameError, 'Name can only contain letters and spaces');
        return false;
    } else {
        showSuccess(nameInput, nameError);
        return true;
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    
    if (emailValue === '') {
        showError(emailInput, emailError, 'Email is required');
        return false;
    } else if (!emailRegex.test(emailValue)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        return false;
    } else {
        showSuccess(emailInput, emailError);
        return true;
    }
}

function validateMessage() {
    const messageValue = messageInput.value.trim();
    
    if (messageValue === '') {
        showError(messageInput, messageError, 'Message is required');
        return false;
    } else if (messageValue.length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters');
        return false;
    } else if (messageValue.length > 500) {
        showError(messageInput, messageError, 'Message must not exceed 500 characters');
        return false;
    } else {
        showSuccess(messageInput, messageError);
        return true;
    }
}

// Helper functions to show error/success states
function showError(input, errorElement, message) {
    input.classList.remove('success');
    input.classList.add('error');
    errorElement.textContent = message;
}

function showSuccess(input, errorElement) {
    input.classList.remove('error');
    input.classList.add('success');
    errorElement.textContent = '';
}

// Real-time validation on input
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

nameInput.addEventListener('input', () => {
    if (nameInput.classList.contains('error')) {
        validateName();
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('error')) {
        validateEmail();
    }
});

messageInput.addEventListener('input', () => {
    if (messageInput.classList.contains('error')) {
        validateMessage();
    }
});

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Hide previous success message
    successMessage.classList.remove('show');
    
    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    
    // Check if all validations passed
    if (isNameValid && isEmailValid && isMessageValid) {
        // Show success message
        successMessage.classList.add('show');
        
        // Log form data (since we're not actually sending)
        console.log('Form Data:', {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        });
        
        // Reset form after successful submission
        setTimeout(() => {
            form.reset();
            nameInput.classList.remove('success');
            emailInput.classList.remove('success');
            messageInput.classList.remove('success');
        }, 2000);
    } else {
        // Form is invalid, prevent submission
        console.log('Form validation failed');
    }
});

// Test edge cases
console.log('Testing email regex:');
console.log('test@example.com:', emailRegex.test('test@example.com')); // true
console.log('invalid-email:', emailRegex.test('invalid-email')); // false
console.log('test@:', emailRegex.test('test@')); // false
console.log('@example.com:', emailRegex.test('@example.com')); // false
console.log('test@domain:', emailRegex.test('test@domain')); // false
