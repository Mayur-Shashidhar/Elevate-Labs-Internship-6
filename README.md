# Task 6: Contact Form with JavaScript Validation

## Objective
Build a contact form with client-side validation for name, email, and message.

## Tasks Completed ✓

1. ✅ Build HTML form with input fields: Name, Email, Message, Submit.
2. ✅ Style form with CSS for clarity.
3. ✅ Add JavaScript to validate inputs on submit: non-empty, valid email format.
4. ✅ Show error messages below inputs if validation fails.
5. ✅ Prevent form submission if invalid.
6. ✅ Show success message on valid submission (no actual sending).
7. ✅ Test edge cases: empty inputs, invalid email, special characters.
8. ✅ Use regex for email validation.

## Features
- **HTML Form** with input fields: Name, Email, Message, and Submit button
- **CSS Styling** for a clean and modern interface
- **JavaScript Validation** with the following rules:
  - All fields are required (non-empty)
  - Name: Must be at least 2 characters and contain only letters/spaces
  - Email: Must match valid email format using regex
  - Message: Must be between 10-500 characters
- **Error Messages** displayed below inputs when validation fails
- **Success Messages** shown on valid form submission
- **Prevention** of form submission if any validation fails
- **Real-time Validation** on input blur and during typing (after initial error)

## Validation Rules

### Name
- Required (cannot be empty)
- Minimum 2 characters
- Only letters and spaces allowed

### Email
- Required (cannot be empty)
- Valid email format using regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### Message
- Required (cannot be empty)
- Minimum 10 characters
- Maximum 500 characters

## Edge Cases Tested
✓ Empty inputs
✓ Invalid email formats (missing @, missing domain, etc.)
✓ Special characters in name field
✓ Messages that are too short or too long
✓ Whitespace-only inputs (trimmed before validation)

## How to Use
1. Open `index.html` in a web browser
2. Fill out the form fields
3. Click Submit
4. See error messages if validation fails
5. See success message when all validations pass

## Files
- `index.html` - HTML structure with form elements
- `style.css` - Styling for form and validation states
- `script.js` - JavaScript validation logic and form handling
- `README.md` - Project documentation

## Outcome
Learn form handling, validation, regex, and user feedback mechanisms in JavaScript.

---

## Interview Questions & Answers

### 1. How to validate form inputs in JavaScript?

**Answer:** Form inputs can be validated in JavaScript using several approaches:
- **Manual validation**: Access input values using `document.getElementById()` or similar methods, then check against conditions (empty, length, format, etc.)
- **Event listeners**: Attach `submit`, `blur`, or `input` events to trigger validation functions
- **Regular expressions**: Use regex patterns to validate formats (email, phone, etc.)
- **Constraint Validation API**: Use built-in HTML5 validation with `validity` property and `checkValidity()` method

**Example:**
```javascript
function validateName() {
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        showError('Name is required');
        return false;
    }
    return true;
}
```

### 2. What is event.preventDefault()?

**Answer:** `event.preventDefault()` is a method that prevents the default action associated with an event from occurring. 

**Common use cases:**
- **Form submission**: Prevents the form from submitting and refreshing the page, allowing JavaScript to handle validation first
- **Link clicks**: Prevents navigation to allow custom behavior
- **Context menu**: Prevents right-click menu from appearing

**Example:**
```javascript
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stops form from submitting
    // Perform validation and custom logic
});
```

### 3. How to check email format with regex?

**Answer:** Email format validation uses regular expressions to match the pattern of a valid email address.

**Common regex pattern:**
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

**Breakdown:**
- `^` - Start of string
- `[^\s@]+` - One or more characters that are not whitespace or @
- `@` - Literal @ symbol
- `[^\s@]+` - One or more characters that are not whitespace or @
- `\.` - Literal dot (escaped)
- `[^\s@]+` - One or more characters for domain extension
- `$` - End of string

**Usage:**
```javascript
if (emailRegex.test(emailValue)) {
    // Valid email
} else {
    // Invalid email
}
```

### 4. Difference between client-side and server-side validation?

**Answer:**

**Client-side validation:**
- Runs in the user's browser using JavaScript
- **Pros**: Immediate feedback, better UX, reduces server load
- **Cons**: Can be bypassed (not secure), depends on JavaScript being enabled
- **Use for**: Quick feedback, format checks, reducing unnecessary requests

**Server-side validation:**
- Runs on the server after form submission
- **Pros**: Secure, cannot be bypassed, works without JavaScript
- **Cons**: Slower feedback, requires server round-trip
- **Use for**: Security checks, database validation, final verification

**Best practice**: Use both - client-side for UX and server-side for security.

### 5. How to show error messages dynamically?

**Answer:** Error messages can be displayed dynamically by manipulating the DOM:

**Methods:**
1. **Using dedicated error elements:**
```javascript
function showError(input, errorElement, message) {
    errorElement.textContent = message; // Set error text
    input.classList.add('error'); // Add error styling
}
```

2. **Creating elements dynamically:**
```javascript
const errorDiv = document.createElement('div');
errorDiv.className = 'error-message';
errorDiv.textContent = 'Invalid input';
input.parentNode.appendChild(errorDiv);
```

3. **Using innerHTML:**
```javascript
document.getElementById('errorContainer').innerHTML = '<p class="error">Error message</p>';
```

**Best practices:**
- Clear previous errors before showing new ones
- Position errors near the relevant input field
- Use appropriate styling (color, icons)
- Make errors accessible (ARIA attributes)

### 6. What is form submission?

**Answer:** Form submission is the process of sending form data to a server for processing.

**How it works:**
1. User fills out form fields
2. User clicks submit button
3. Browser collects all form data
4. Data is sent to the URL specified in the `action` attribute
5. Server processes the data and sends a response

**Methods:**
- **GET**: Data sent in URL parameters (visible, limited size)
- **POST**: Data sent in request body (more secure, larger size)

**Preventing default submission:**
```javascript
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop default submission
    // Handle with JavaScript (AJAX, fetch, etc.)
});
```

**Modern approach (AJAX/Fetch):**
```javascript
fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
});
```

### 7. How to improve form accessibility?

**Answer:** Making forms accessible ensures they can be used by people with disabilities:

**Best practices:**
1. **Labels**: Always use `<label>` elements associated with inputs
```html
<label for="name">Name:</label>
<input id="name" type="text">
```

2. **ARIA attributes**: Use for screen readers
```html
<input aria-required="true" aria-invalid="false" aria-describedby="nameError">
<span id="nameError" role="alert">Error message</span>
```

3. **Keyboard navigation**: Ensure tab order is logical, support Enter to submit

4. **Error identification**: 
   - Use `role="alert"` for error messages
   - Provide clear, descriptive error text
   - Don't rely on color alone

5. **Focus management**: Ensure focus indicators are visible

6. **Required fields**: Mark clearly with asterisk or "required" text

7. **Instructions**: Provide clear field instructions and format examples

### 8. How to handle form reset?

**Answer:** Form reset clears all form fields back to their default values.

**Methods:**

1. **HTML reset button:**
```html
<button type="reset">Reset</button>
```

2. **JavaScript reset() method:**
```javascript
document.getElementById('myForm').reset();
```

3. **Manual reset with custom logic:**
```javascript
function resetForm() {
    form.reset(); // Clear values
    // Clear custom states
    inputs.forEach(input => {
        input.classList.remove('error', 'success');
    });
    // Clear error messages
    errorMessages.forEach(error => {
        error.textContent = '';
    });
}
```

**Best practices:**
- Confirm before resetting (especially for long forms)
- Clear validation states and error messages
- Reset custom UI elements (counters, etc.)
- Consider if reset is necessary (often users don't need it)

### 9. What are common security issues with forms?

**Answer:** Forms are vulnerable to several security threats:

1. **Cross-Site Scripting (XSS)**
   - **Risk**: Malicious scripts injected through form inputs
   - **Prevention**: Sanitize and escape all user input, use Content Security Policy

2. **SQL Injection**
   - **Risk**: Malicious SQL queries through form data
   - **Prevention**: Use parameterized queries, never concatenate user input into SQL

3. **Cross-Site Request Forgery (CSRF)**
   - **Risk**: Unauthorized actions performed on behalf of authenticated users
   - **Prevention**: Use CSRF tokens, check referrer headers

4. **Data Exposure**
   - **Risk**: Sensitive data transmitted insecurely
   - **Prevention**: Use HTTPS, encrypt sensitive data, don't send passwords in URLs

5. **Mass Assignment**
   - **Risk**: Unauthorized modification of object properties
   - **Prevention**: Whitelist allowed fields, validate on server

6. **File Upload Vulnerabilities**
   - **Risk**: Malicious files uploaded to server
   - **Prevention**: Validate file types, limit sizes, scan for malware, store outside web root

**General best practices:**
- Always validate on both client AND server
- Use rate limiting to prevent abuse
- Implement proper authentication and authorization
- Log and monitor suspicious activity

### 10. How does HTML5 built-in validation differ from JS validation?

**Answer:**

**HTML5 Built-in Validation:**
- Uses HTML attributes: `required`, `type="email"`, `pattern`, `min`, `max`, `minlength`, `maxlength`
- Browser handles validation automatically
- Default error messages (browser-specific, not customizable)
- No JavaScript required
- Limited customization

**Example:**
```html
<input type="email" required minlength="5">
```

**JavaScript Validation:**
- Custom validation logic written in JavaScript
- Full control over validation rules
- Custom error messages
- Can validate complex conditions
- Works across all browsers consistently
- Can be styled and positioned as needed

**Example:**
```javascript
if (!emailRegex.test(email)) {
    showError('Please enter a valid email');
}
```

**Key Differences:**

| Feature | HTML5 | JavaScript |
|---------|-------|------------|
| **Setup** | Simple attributes | Code required |
| **Customization** | Limited | Full control |
| **Error messages** | Browser default | Custom |
| **Complex rules** | Limited | Unlimited |
| **Styling** | Browser default | Full control |
| **Browser support** | Modern only | All browsers |
| **JavaScript required** | No | Yes |

**Best approach**: Combine both - HTML5 for basic validation and better accessibility, JavaScript for enhanced UX and complex rules.

---

## Screenshots

### 1. Initial Form State
![Initial Form](screenshots/initial-form.png)
*Clean contact form with gradient background and modern design*

### 2. Validation Errors
![Validation Errors](screenshots/validation-errors.png)
*Error messages displayed below each invalid field with red borders*

### 3. Empty Field Validation
![Empty Fields](screenshots/empty-fields.png)
*Error messages when trying to submit with empty fields*

### 4. Invalid Email Format
![Invalid Email](screenshots/invalid-email.png)
*Email validation error showing regex-based format checking*

### 5. Invalid Name with Special Characters
![Invalid Name](screenshots/invalid-name.png)
*Name field validation rejecting special characters and numbers*

### 6. Message Length Validation
![Message Length](screenshots/message-length.png)
*Error when message is too short (less than 10 characters)*

### 7. Successful Validation
![Success State](screenshots/success-state.png)
*All fields validated successfully with green borders*

### 8. Success Message
![Success Message](screenshots/success-message.png)
*Success message displayed after valid form submission*

### 9. Real-time Validation
![Real-time Validation](screenshots/realtime-validation.png)
*Live validation feedback as user types*

### 10. Mobile Responsive View
![Mobile View](screenshots/mobile-view.png)
*Form adapts beautifully to mobile screens*

---

**Note:** To add screenshots, create a `screenshots` folder in the project directory and add the corresponding images.
