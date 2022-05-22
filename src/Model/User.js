const arr = [];

export  const user = [
    {username: "fmartinez", password: "12345"},
    {username: "acastillo", password: "123456"}

]

export  function person (username,password,password2)  {

    arr.push({username:username,password:password,password2:password2});

}


//ver datos de los usuarios
export const verDato=()=> console.log(arr);



