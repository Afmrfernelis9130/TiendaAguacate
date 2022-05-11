const a = [
    {

        username: "fmartinez",
        pass: 12345
    },
    {
        username: "acastillo",
        pass: 123456
    }
];





const validLogin = () => {


    let usernameU = document.getElementById('email').value;
    let passwordP = document.getElementById('password').value;


    if (usernameU=="fmartinez@homail.com" && passwordP==12345 || usernameU=="acastillo@homail.com" && passwordP==123456 ) {
        alert("todo bien")
        console.log("todo listo")
    }
    if (usernameU !="fmartinez@homail.com" && passwordP==12345 || usernameU !="acastillo@homail.com" && passwordP==123456 ) {
        alert("Name o Password wrong")
    }

    if (usernameU=="" && passwordP=="") {
        alert("empty fields")
    }




}

