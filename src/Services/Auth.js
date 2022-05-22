  // import {user} from "/src/Model/User.js"


  // const form = document.getElementById('form');


  // form.addEventListener('submit', e => {
  //     e.preventDefault();
  //
  //
  //     startSession();
  //
  //
  // });

const user = [
    {username: "fmartinez", password: "12345"},
    {username: "acastillo", password: "123456"}

]

 function startSession() {


    //capturamos los datos del HTML
    const username = document.getElementById("email").value;
    const passwords = document.getElementById("password").value;



//con este for recoremos el array de usurios

     for (users of user) {

        if (users.username == username && users.password == passwords) {

            window.location = "/public/home.html";

            return false;

        }
        if (username == " " || passwords == "") {
            alert("Empty fields")
            return false;

        }
        if (users.username == username && passwords == "") {
            alert("Empty password field")
            return false;

        }
        if (username == "" && users.password == passwords) {
            alert("Empty username field")
            return false;

        }
        if (users.username != username || users.password != passwords) {
            alert("Name o Password wrong")
            return false;

        }
    }

    return false;

}
