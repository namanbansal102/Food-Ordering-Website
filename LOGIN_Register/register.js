document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('.register-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput.addEventListener('input', function() {
        const email = this.value.trim();
        if (email && (!emailRegex.test(email) || /^[^\s@]+@.*\d/.test(email))) {
            emailError.style.display = 'block';
            emailError.textContent = /^[^\s@]+@.*\d/.test(email) 
                ? 'Email address cannot contain numbers after the @ symbol.' 
                : 'Please enter a valid email address.';
        } else {
            emailError.style.display = 'none';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = emailInput.value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (username.length < 3) {
            alert('Username must be at least 3 characters long.');
            return;
        }

        if (!emailRegex.test(email) || /^[^\s@]+@.*\d/.test(email)) {
            alert('Please enter a valid email address without numbers after the @ symbol.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
            alert('Password must contain at least one uppercase letter, one lowercase letter, and one number.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

      
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some(user => user.email === email)) {
            alert('This email is already registered. Please use a different email or try to login.');
            return;
        }

      
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html';
    });
});