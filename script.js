// Declaring variables
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let result = document.querySelector('.error');

// Checks if password and confirmPassword match and updates result text accordingly
function checkPassword() {
    result.innerText = password.value == confirmPassword.value ? '' : 'Password Does Not Match!';
}

// Adds keyup event listener to password element to call checkPassword function if
// confirmPassword value is not empty
password.addEventListener('keyup', () => {
    if (confirmPassword.value.length != 0) 
    checkPassword();
});

// Adds keyup event listener to confirmPassword element to call checkPassword function
confirmPassword.addEventListener('keyup', checkPassword);