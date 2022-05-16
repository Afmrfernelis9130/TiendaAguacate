const user=[
    {username:"fmartinez",password:"12345"},
    {username:"acastillo",password:"123456"}

]

const startSession=()=>{


    //capturamos los datos del HTML
    const username= document.getElementById("Email").value;
    const passwords= document.getElementById("Password").value;;


//con este for recoremos el array de usurios
    for(users of user){

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

        }
    }

    return false;

}
