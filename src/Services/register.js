const api = "/src/Model/registerUser.json"
// const api = "/src/Model/user.json";

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btn = document.getElementById('btn');
let isNotSave = false;


btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData()
    validForm()

});


const fetchData = async () => {
    try {
        const response = await fetch(api);
        const data = await response.json();

        if (!isNotSave) {
            addRegister(data);
        }

    } catch (err) {
        console.log(err);
    }

}


function validForm() {

    //Capturar valor de los input y limpiar los espacios
    const usernameValue = username.value.trim();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //Validar username

    if (usernameValue.length < 8) {
        setErrorFor(username, 'Username must be at least 8 characters');

    }
    if (usernameValue.length > 8) {
      setSuccessFoRegister(username);

    }
    if (usernameValue==="") {
        setErrorFor(username, 'Username is required');
        isNotSave = true;

    }
    if (usernameValue === usernameValue.toUpperCase() && !emailValue==="") {
        setErrorFor(username, 'Username must be in UpperCase');
        isNotSave = true;

    }
    if(emailValue === "") {
        setErrorFor(email, 'Email is required');
        isNotSave = true;

    }
    else if(!setErrorForEmail(emailValue)) {
        setErrorFor(email, 'Email is invalid');
        isNotSave = true;

    }
    else {
        setSuccessFoRegister(email);

    }
    if(passwordValue === "") {
        setErrorFor(password, 'Password is required');
        isNotSave = true;

    }
    if(password2Value === "") {
        setErrorFor(password2, 'Password is required');
        isNotSave = true;

    }
    if(password2Value !== passwordValue) {
        setErrorFor(password2, 'not match');
        isNotSave = true;

    }


}

function addRegister(data) {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    data.push({
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
        password2: password2Value
    });

    console.log(data);

}

function setSuccessFoRegister(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setErrorForEmail(email) {
    let regax = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    return regax.test(email);




}




