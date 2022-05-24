const arr = [];


//lo uso para haver la validadcion de los usurios para el login
export  const user = [
    {username: "fmartinez", password: "12345"},
    {username: "acastillo", password: "123456"}

]


//lo utilizo para agregar los nuevos usuarios el registro
export  function person (username,password,password2)  {

    arr.push({username:username,password:password,password2:password2});

}


//ver datos de los usuarios
export const verDato=()=> console.log(arr);

export function  clear(elementos) {


    for (let i = 0; i < elementos.length; i++) {
        elementos[i].value='';
    }
}




