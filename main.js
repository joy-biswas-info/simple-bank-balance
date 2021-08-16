
// Confirm User Validity 
document.getElementById('login-btn').addEventListener(
    'click', function () {
        // get user email
        const emailField = document.getElementById('email-field');
        const email = emailField.value;
        // get user password
        const passwordField = document.getElementById('password-field');
        const password = passwordField.value;

        // check ValidityState
        if (email == 'joy@gmail.com' && password == 'Mritunj0y') {
            window.location.href = 'account.html';
        }
    }
)


