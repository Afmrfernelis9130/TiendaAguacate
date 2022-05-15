const user=[
    {username:"fmartinez",password:"12345"},
    {username:"acastillo",password:"123456"}

]

const startSession=()=>{


    const username= document.getElementById("Email").value;
    const passwords= document.getElementById("Password").value;;



    for(users of user){

        if(users.username== username && users.password== passwords){
            alert("todo rico")


        }
        if(users.username==" " || users.password== ""){
            alert("empty fields")
            console.log("te la bebiste")

        }
        if(users.username!=username || users.password!= passwords){
            alert("Name o Password wrong")
            console.log("te la bebiste")

        }
    }

    return false;

}
