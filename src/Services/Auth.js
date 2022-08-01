import {validInput} from "./inputValid.js";

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
    const validar = new validInput();

    const usernameValue = username.value.trim();
    const passwordsValue = passwords.value.trim();


    data.forEach(element => {

        if (element.username == usernameValue && element.pass == passwordsValue) {
            console.log("Login Successful")
            window.location = "/public/home.html";
            isLogged = true;


        } else if (element.username != usernameValue && element.pass != passwordsValue && !isLogged) {

            console.log("Login Failed")
        } else if (usernameValue == "") {
            validar.setErrorFor(username, "The username field is required");
             console.log("Username is empty")

        }
        else if (passwordsValue == "" && !isLogged) {
            validar.setErrorFor(passwords, "The password field is required");
            console.log("Passwords is empty")

         } else if (!validar.setErrorForEmail(usernameValue && !isLogged)) {
            validar.setErrorFor(username, "The email is not valid")

       }
        else if (validar.setErrorForEmail(usernameValue)) {
            validar.setSuccessFor(username);
        }
        isLogged = true;
    })

}



  

   










                                 