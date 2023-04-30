// Get the form element
var form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the values of the username and password fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username==="admin"&&password==="password") {
        // Redirect to the dashboard page
        window.location.href = 'login-to-web.html';
    } else {
        // Display an error message
        alert('Incorrect username or password. Please try again.');
    }
});