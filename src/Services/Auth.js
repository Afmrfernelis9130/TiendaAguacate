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

 

}



















