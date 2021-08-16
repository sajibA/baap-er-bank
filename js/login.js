document.getElementById('submit-button').addEventListener('click', function () {


    const email = document.getElementById('user-email').value;

    // get user password
    const password = document.getElementById('user-password').value;

    if (email == 'sajib.11@gmail.com' && password == '1234') {
        window.location.href = 'banking.html';
    }

});