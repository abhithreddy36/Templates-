document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Here you would typically send these values to your server
    console.log('Login attempt:', {
        username,
        password: '********', // Never log actual passwords
        remember
    });
    
    // For demo purposes, show an alert
    alert('Login functionality would be implemented here');
});
