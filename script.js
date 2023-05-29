let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let result = document.querySelector('.error');

function checkPassword() {
    result.innerText = password.value == confirmPassword.value ? '' : 'Password Does Not Match!';
}

password.addEventListener('keyup', () => {
    if (confirmPassword.value.length != 0) 
    checkPassword();
});

confirmPassword.addEventListener('keyup', checkPassword);