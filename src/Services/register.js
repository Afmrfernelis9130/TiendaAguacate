
    import { validInput } from "./inputValid.js";


    //Capturas los datos del html
    const form = document.querySelector('#form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passConfirm = document.querySelector('#password2');
   
    form.addEventListener("submit" , e=>{
        e.preventDefault();
    
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
     if (usernameValue === "")  {
            validarRegistro.setErrorFor(username,"The field is empty");
            return false;
       }
         else if (usernameValue.length  < 6 ) {
           validarRegistro.setErrorFor(username,"Must contain a minimum of 6 characters");
           return false;
                    }
         else{
            validarRegistro.setSuccessFor(username);
                }
           //Validar correo 
          if (emailValue === "") {
             validarRegistro.setErrorFor (email , "The field is empty");
             return false;
          } else if (!validarRegistro.setErrorForEmail(emailValue)){
                 validarRegistro.setErrorFor (email , "No es un correo valido");
                 return false;
          }
          else {
             validarRegistro.setSuccessFor (email);
          }
           //Validar contrasena

           if (passwordValue === "" ){
              validarRegistro.setErrorFor(password , "El campo esta vacio");               
           }else if (passwordValue.length < 9){
              validarRegistro.setErrorFor(password , "Debe tener minimo 8 caracteres");
           }
           else
            if (passwordValue != passConfirmValue){
              validarRegistro.setErrorFor(passConfirm ,"Las contrasenas no coinciden");
              validarRegistro.setErrorFor(password ,"Las contrasenas no coinciden");
           }
           else {
              validarRegistro.setSuccessFor(password);
              validarRegistro.setSuccessFor(passConfirm);
           }

           

}




