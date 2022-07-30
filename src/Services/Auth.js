

const api = "/src/Model/user.json";

const username = document.getElementById("email");
const passwords = document.getElementById("password");
const btnOnClick = document.getElementById('btn');
const form = document.querySelector("#form-container");
let isLogged = false;



btnOnClick.addEventListener('click', (e) => {

    e.preventDefault();


    fetchData()


})


//llamado a la api
const fetchData = async () => {


    try {
        const response = await fetch(api);
        const data = await response.json();


        checkInputs(data);


    } catch (err) {
        console.log(err);
    }

}


//capturamos los datos del HTML

function checkInputs(data) {
    // const validar = new validInput();

    const usernameValue = username.value.trim();
    const passwordsValue = passwords.value.trim();


    data.forEach(element => {

        if (element.username == usernameValue && element.pass == passwordsValue) {
            console.log("Login Successful")
            window.location = "home.html";
            isLogged = true;


        }
        if (element.username != usernameValue && element.pass != passwordsValue && !isLogged) {

            console.log("Login Failed")

        }
        if (usernameValue == "" && !isLogged) {

            setErrorFor(username, "The username field is required")



        }
        if (usernameValue == "" && passwordsValue == "" &&  !isLogged) {

            setErrorFor(username, "The username field is required")


        }
        if (passwordsValue == "" && !isLogged) {
            setErrorFor(passwords, "The password field is required");


        }
        if (!setErrorForEmail(usernameValue) && !usernameValue=="" ) {
            setErrorFor(username, "The email is not valid")


        }
        if (setErrorForEmail(usernameValue) ) {
            setSuccessFor(username);
        }
        isLogged = true;
    })

}


function setSuccessFor(input) {
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
   










                                 