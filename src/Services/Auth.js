import { validInput } from "../inputValid.js";

const user = [
    {username: "fmartinez", password: "12345"},
    {username: "acastillo", password: "123456"}

]
 //Obtener los elementos del html
const username = document.getElementById("email"); 
const passwords = document.getElementById("password");
const form = document.querySelector("#form-container");

// 

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();

    //clear(elementos);

});




function checkInputs (){
//Instancia el objeto para validad los input 

const validar = new validInput();

//Tomar el valor del los input y borrar espacio

const usernameValue = username.value.trim();
const passwordsValue = passwords.value.trim();



//Validar Email

if (usernameValue == "" ){
    validar.setErrorFor(username,"El campo esta vacio")
    
} else 
   if (!validar.setErrorForEmail(usernameValue)){
     validar.setErrorFor(username , "No es un correo valido")

} else 
   if (validar.setErrorForEmail(usernameValue)){
     validar.setSuccessFor(username);
   }

   //Validar password 
   if (passwordsValue == "") {
    validar.setErrorFor(passwords,"El campo esta vacio")
  
} 
}


  

   







                                 