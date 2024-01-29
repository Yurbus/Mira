// script.js

document.addEventListener('DOMContentLoaded', function() {
    const signupLink = document.getElementById('signupLink');
    const loginLink = document.getElementById('loginLink');

    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'office_register.html';
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'login.html';
    });
});