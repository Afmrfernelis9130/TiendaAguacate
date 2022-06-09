   import {user} from "/src/Model/User.js"


const form = document.getElementById('form');

   const username = document.getElementById("email").value;
   const passwords = document.getElementById("password").value;


//Recive el evento cuando se le da cli al boton
  form.addEventListener('submit', e => {
      e.preventDefault();


      function f(u,p){

          return new Promise((resolve, reject)=>{
              let users;

              for (users of user) {

                  if (users.username == u&& users.password == p) {
                      resolve(window.location = "/public/home.html")

                      //window.location = "/public/home.html";

                      return false;

                  }

                  if (u == " " || p == "") {
                      reject(alert("Empty fields"))


                      return false;

                  }
                  else if (users.username == u && p == "") {

                      return false;

                      reject(alert("Empty password field"))

                  }
                  else if (u == "" && users.password == p) {


                      reject(alert("Empty username field"))
                      return false;

                  }
                  else if (users.username != u || users.password != p) {


                      reject( alert("Name o Password wrong"))
                      return false;

                  }
              }

              return false;


          })



      }

      f(username,passwords)
          .then((data)=>console.log(data))
          .catch((err) => console.error(err))

      //startSession();


});

// function startSession() {
//
//
//     //capturamos los datos del HTML
//     const username = document.getElementById("email").value;
//     const passwords = document.getElementById("password").value;
//
//
//
// //con este for recoremos el array de usurios
//
//     let users;
//     for (users of user) {
//
//         if (users.username == username && users.password == passwords) {
//
//             window.location = "/public/home.html";
//
//             return false;
//
//         }
//         if (username == " " || passwords == "") {
//             alert("Empty fields")
//             return false;
//
//         }
//         if (users.username == username && passwords == "") {
//             alert("Empty password field")
//             return false;
//
//         }
//         if (username == "" && users.password == passwords) {
//             alert("Empty username field")
//             return false;
//
//         }
//         if (users.username != username || users.password != passwords) {
//             alert("Name o Password wrong")
//             return false;
//
//         }
//     }
//
//     return false;
//
// }


