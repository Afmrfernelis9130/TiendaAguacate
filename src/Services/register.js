
    // import { validInput } from "./inputValid.js";
    //Capturar los elementos del html
    
    // const form = document.querySelector('#form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('passsword');
    const btn = document.getElementById('btn');

    const passConfirm = document.querySelector('#password2');

    
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        validForm();
    });



const validForm = ()=>{
        
    
    //Capturar valor de los input y limpiar los espacios
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue =password.value.trim();
    const passConfirmValue = passConfirm.value.trim();
   
    
    //Validar username
     if (usernameValue ==="")  {
            setErrorFor(username,"El campo esta vacio");
       }
         else if (usernameValue.length  < 6 ) {

           setErrorFor(username,"Debe contener minimo 6 caracteres")
                    }

        else  {
            setSuccessFoRegister(username);
                }
           //Validar correo 
          if (emailValue === "") {
             setErrorFor (email , "El campo esta vacio")
          } else if (!setErrorForEmail(emailValue)){

                 setErrorFor (email , "No es un correo valido");
          }

          else {
             setSuccessFoRegister (email);
          }
           //Validar contrasena

           if (passwordValue === "" ){
              setErrorFor(password , "El campo esta vacio")
               
           }else if (passwordValue.length < 9){
              setErrorFor(password , "Debe tener minimo 8 caracteres")

           }

           else

            if (passwordValue != passConfirmValue){
              setErrorFor(passConfirm ,"Las contrasenas no coinciden")
              setErrorFor(password ,"Las contrasenas no coinciden")
           }

           else {
              setSuccessFoRegister(password);
              setSuccessFoRegister(passConfirm);
           }

           

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
function setErrorForEmail (email){
let regax = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
return  regax.test(email);
}




