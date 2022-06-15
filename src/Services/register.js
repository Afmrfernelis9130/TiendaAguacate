
    import { validInput } from "./inputValid.js";
    const passConfirm = document.querySelector('#password2');

    form.addEventListener("submit" , e=>{
        e.preventDefault();

        //Capturar los elementos del html
    const form = document.querySelector('#form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('passsword');
    
    
    
        validarForm();
    });



const validarForm = ()=>{
        

    //Instancia objeto para la validacion de los inputs
    const validarRegistro = new validInput ();

    //Capturar valor de los input y limpiar los espacios
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passConfirmValue = passConfirm.value.trim();
   
    
    //Validar username
     if (usernameValue ==="")  {
            validarRegistro.setErrorFor(username,"El campo esta vacio");
       }
         else if (usernameValue.length  < 6 ) {

           validarRegistro.setErrorFor(username,"Debe contener minimo 6 caracteres")
                    }

        else  {
            validarRegistro.setSuccessFor(username);
                }
           //Validar correo 
          if (emailValue === "") {
             validarRegistro.setErrorFor (email , "El campo esta vacio")
          } else if (!validarRegistro.setErrorForEmail(emailValue)){

                 validarRegistro.setErrorFor (email , "No es un correo valido");
          }

          else {
             validarRegistro.setSuccessFor (email);
          }
           //Validar contrasena

           if (passwordValue === "" ){
              validarRegistro.setErrorFor(password , "El campo esta vacio")
               
           }else if (passwordValue.length < 9){
              validarRegistro.setErrorFor(password , "Debe tener minimo 8 caracteres")

           }

           else

            if (passwordValue != passConfirmValue){
              validarRegistro.setErrorFor(passConfirm ,"Las contrasenas no coinciden")
              validarRegistro.setErrorFor(password ,"Las contrasenas no coinciden")
           }

           else {
              validarRegistro.setSuccessFor(password);
              validarRegistro.setSuccessFor(passConfirm);
           }

           

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
function setErrorForEmail (email){
let regax = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
return  regax.test(email);
}




