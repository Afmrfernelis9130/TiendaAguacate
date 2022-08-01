
//Validar Inputs & Correo
export class validInput {
    setSuccessFor(input) {
        const formControl = input.parentElement;
         formControl.className = 'form-control success';
                                     }
    
    setErrorFor(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            formControl.className = 'form-control error';
             small.innerText = message;
                                    }
     setErrorForEmail (email){
            let regax = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
            return  regax.test(email);
                         }
                                        
    
}


//Formato para los precios
 export class price {

    formatPrice = (price) =>{
        const newPrice = new window.Intl.NumberFormat("en-EN" ,{
            style:"currency",
            currency:"USD", }).format(price);
            return newPrice;
    
     };  



 }
 
