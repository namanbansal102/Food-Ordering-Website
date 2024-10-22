document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('.login-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email =   document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
      
        const users = JSON.parse(localStorage.getItem('users') || '[]');
   
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            alert('Login successful!');
   
            window.location.href = '../index.html'; 
            console.log('Logged in as:', user.username);
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});