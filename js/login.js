document.getElementById('submit-btn').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const passwordField = document.getElementById('password-field');
    const userName = nameField.value;
    const userPassword = passwordField.value;

    // jodi sorto sotti hoy tahole tomi banking page jao
    if ((userName == 'manik+amena') && (userPassword == 'love')) {
        window.location.href = 'banking.html';
    }
    else {
        console.log(false);
    }
});