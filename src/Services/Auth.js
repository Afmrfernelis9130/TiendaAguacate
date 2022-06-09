// const username = document.getElementById("email");
// const passwords = document.getElementById("password");

const api = "/src/Model/user.json";


document.addEventListener('DOMContentLoaded', () => {

    fetchData()
//
});

const fetchData = async () => {


    try {
        const response = await fetch(api);
        const data = await response.json();


        login(data)


    } catch (err) {
        console.log(err);
    }

}


const login = data => {

    const username = document.getElementById("email").value;
    const passwords = document.getElementById("password").value;



    data.forEach(element => {

        if(element.username=="fmartinez" && element.pass=="12345"){
            console.log("Login Successful")

            return false;

        }   else{
           //  console.log( element.pass)
            console.log("Login Failed")
        }
    })


}


function startSession() {

    //fetchData()

    console.log(username)

}


