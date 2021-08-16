document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.Value;

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPasswoed = passwordField.Value;

    if (userEmail == 'sajib.11@gmail.com' && userPasswoed == 'secrit'); {
        window.location.href = 'banking.html';
    }

});