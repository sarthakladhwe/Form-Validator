const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkRequired(arr) {
    arr.forEach(input => {
        if(input.value.trim() === '') {
            console.log(input.id)
            showError(input, `${getName(input)} is required.`);
        } else {
            showSuccess(input)
        }
    });
}

function getName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
})