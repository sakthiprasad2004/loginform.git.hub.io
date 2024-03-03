function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        alert('Username or email and password are required');
        return;
    }

    // You can add more complex validation or connect to a server for authentication here

    alert('Login successful!'); // For demonstration purposes, replace this with your authentication logic
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
}
