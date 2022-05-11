const a = [
    {

        username: "fmartinez",
        pass: "aguacate"
    },
    {
        username: "acastillo",
        pass: "aguacate"
    }
];





const validLogin = () => {


    let usernameU = document.getElementById('email').value;
    let passwordP = document.getElementById('password').value;


    if (usernameU=="fmartinez@homail.com" && passwordP==="aguacate" || usernameU=="acastillo@homail.com" && passwordP==="aguacate" ) {
        alert("todo bien")

    }
    if (usernameU !="fmartinez@homail.com" && passwordP==="aguacate" || usernameU !="acastillo@homail.com" && passwordP==="aguacate" ) {
        alert("Name o Password wrong")
    }

    if (usernameU=="" && passwordP=="") {
        alert("empty fields")
    }




}

