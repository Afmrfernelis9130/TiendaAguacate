<<<<<<< HEAD
const usuario = [
    {   
        name:"Fernelis",
        username: "fmartinez@gmail.com",
        pass: "aguacate"
    },
    {
        name:"Alexander",
        username: "acastillo@gmail.com",
        pass: "aguacate2"
    }
];

//Crear arreglo con los valores

const imprimirUsuario= ()=>{


    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
=======
const user=[
    {username:"fmartinez",password:"12345"},
    {username:"acastillo",password:"123456"}

]

const startSession=()=>{


    //capturamos los datos del HTML
    const username= document.getElementById("Email").value;
    const passwords= document.getElementById("Password").value;;

>>>>>>> 138469b0859e698fae0afdbb6bbba71cdad4151a

//con este for recoremos el array de usurios
    for(users of user){

<<<<<<< HEAD
    let arrays =[];
    for (let  i=0 ; usuario.length > i ; i++ ){
    arrays = arrays.concat(Object.values(usuario[i]));

   
   }

if ( arrays[1] == username && arrays[2]== password) {
    alert("Se logeo Fernis!")
}else 

if(arrays[4] == username && arrays[5] == password){
    alert("Se logeo Alex!");
}
else 
if (arrays[4] != username || arrays[5] != password){

    alert ("Contrasena o usuario incorrectos");

}else
if( usuario == "" || password == "")
{
    alert("No se pueden dejar espacios en blanco");
}
=======
        if(users.username== username && users.password== passwords){
            alert("Bien")
            return false;

        }
        if(username==" " || passwords== ""){
            alert("Empty fields")
            return false;

        }
        if(users.username== username && passwords== ""){
            alert("Empty password field")
            return false;

        }
        if(username== "" && users.password== passwords){
            alert("Empty username field")
            return false;

        }
        if(users.username!=username || users.password!= passwords){
            alert("Name o Password wrong")
            return false;
>>>>>>> 138469b0859e698fae0afdbb6bbba71cdad4151a

        }
    }

<<<<<<< HEAD
 

}



















=======
    return false;

}
>>>>>>> 138469b0859e698fae0afdbb6bbba71cdad4151a
