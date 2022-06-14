const user = [
    {username: "fmartinez", password: "12345"},
    {username: "acastillo", password: "123456"}

]

const username = document.getElementById("email"); 
const passwords = document.getElementById("password");
const form = document.querySelector("#form-container");


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();

    //clear(elementos);

});



//capturamos los datos del HTML

function checkInputs (){

   

const usernameValue = username.value.trim();
const passwordsValue = passwords.value.trim();

if (usernameValue == "" ){
    setErrorFor(username,"El campo esta vacio")
    
} else 
   if (!setErrorForEmail(usernameValue)){
    setErrorFor(username , "No es un correo valido")

} else 
   if (setErrorForEmail(usernameValue)){
       setSuccessFor(username)
   }

else 
   if (passwordsValue == "") {
    setErrorFor(passwords,"El campo esta vacio")
  
} 


}


  

   



//funciones para validad 

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
                                    

                                 