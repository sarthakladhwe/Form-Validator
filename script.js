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

function checkLength(input, min, max) {
    if(input.value.length >= min && input.value.length <= max) {
        showSuccess(input);
    } else {
        showError(input, `${getName(input)} must have characters between ${min} and ${max}`);
    }
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkPasswords(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 4, 25);
    checkEmail(email);
    checkPasswords(password, password2);
})

