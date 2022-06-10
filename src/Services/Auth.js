const api = "/src/Model/user.json";
let username;
let passwords;
const btnOnClick = document.getElementById('btn');
let isLogged = false;

// onclick event
btnOnClick.addEventListener('click', (event) => {

    fetchData()


})

// fetch data from json file
const fetchData = async () => {


    try {
        const response = await fetch(api);
        const data = await response.json();


        login(data);


    } catch (err) {
        console.log(err);
    }

}

// login function
const login = data => {
    username = document.getElementById("email").value;
    passwords = document.getElementById("password").value;

    data.forEach(element => {

        if (element.username == username && element.pass == passwords) {
            console.log("Login Successful")
            window.location = "/public/home.html";
            isLogged = true;

        }
        else if (!isLogged) {

            console.log("Login Failed")
        }
    })


}




