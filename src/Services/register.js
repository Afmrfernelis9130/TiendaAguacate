import {person} from "/src/Model/User.js"
import {verDato} from "/src/Model/User.js"


const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let valor = false;





form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();


});


//Validacion de los campos para ver si cumple con lo establecido
function checkInputs() {
    // trim to remove the whitespaces

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if (emailValue === '') {
        setErrorFor(email, 'No puede dejar el email en blanco');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No ingreso un email válido');
    } else {

        setSuccessFor(email);

    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password no debe ingresar en blanco.');
    } else {

        setSuccessFor(password);

    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password2 no debe ngresar en blanco');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords no coinciden');
    } else {
        setSuccessFor(password2);

    }

    if (valor) {
        person(emailValue, passwordValue, password2Value);
        verDato();
    }


    // person(emailValue,passwordValue,password2Value);
    // verDato();

}

function setErrorFor(input, message) {
    valor=false;
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {

    valor = true;
    const formControl = input.parentElement;
    formControl.className = 'form-control success';


}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


