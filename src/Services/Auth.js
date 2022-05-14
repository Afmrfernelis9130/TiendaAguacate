const usuario = [
    {   
        name:"Fernelis",
        username: "fmartinez",
        pass: "aguacate"
    },
    {
        name:"Alexander",
        username: "acastillo",
        pass: "aguacate2"
    }
];

usuario.forEach(element => {
    console.log(Object.values(element));
    
    
});




const username = document.getElementById('email').value;
const password = document.getElementById('password').value;

console.log(username,password);




const imprimirUsuario = ()=>{

    alert(username,password);
}




// const validLogin = () => {


//     let usernameU = document.getElementById('email').value;
//     let passwordP = document.getElementById('password').value;


//     if (usernameU=="fmartinez@homail.com" && passwordP==="aguacate" || usernameU=="acastillo@homail.com" && passwordP==="aguacate" ) {
//         alert("todo bien")

//     }
//     if (usernameU !="fmartinez@homail.com" && passwordP==="aguacate" || usernameU !="acastillo@homail.com" && passwordP==="aguacate" ) {
//         alert("Name o Password wrong")
//     }

//     if (usernameU=="" && passwordP=="") {
//         alert("empty fields")
//     }




// }

