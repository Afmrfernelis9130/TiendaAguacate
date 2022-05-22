// import {person} from "/src/Model/User.js"
// import {verDato} from "/src/Model/User.js"

const arr = [];

// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;
// const password2 = document.getElementById('password2').value;

let email;
let passwordt;
let password2t;


const person = () => {
    email = document.getElementById('email').value;
    passwordt = document.getElementById('password').value;
    password2t = document.getElementById('password2').value;

    // username = email;
    // password = passwordt;
    // password2 = password2t;

    // username, password, password2

    // arr.push({u: username, p: password, p2: password2});
    arr.push({u: email, p: passwordt, p2: password2t});

    console.log(arr.u);
    console.log(email);
}


console.log(arr.u);




