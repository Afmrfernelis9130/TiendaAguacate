const a = [
    {

        username: "fmartinez@hotmail.com",
        pass: "aguacate"
    },
    {
        username: "acastillo@hotmail.com",
        pass: "aguacate2"
    }
];


let usernameU = document.getElementById('Email').value;
let passwordP = document.getElementById('Password').value;



//sacamos la informacion del array
const k = a.map(ar => ar.username);
const k1 = a.map(ar => ar.pass);

//filtramos la informacion del array
const p = k.filter(arr => arr === usernameU);
const p1 = k1.filter(arr => arr === "aguacate");

console.log(p);
console.log(p1);

//convertimos el array filtrado en un string
const uf = p.join()
const pf = p1.join()

console.log(uf);


const validLogin = () => {





    if (usernameU == "fmartinez@hotmail.com" && passwordP === "aguacate" || usernameU == "acastillo@hotmail.com" && passwordP === "aguacate") {
        alert("todo bien")

    } else if (usernameU != "fmartinez@hotmail.com" && passwordP === "aguacate" || usernameU != "acastillo@hotmail.com" && passwordP === "aguacate") {
        alert("Name o Password wrong")
    } else if (usernameU == "" && passwordP === "") {
        alert("empty fields")
    }


}


const prueba = () => {



    console.log(p1);

    const pruU =usernameU;
    const PruP = passwordP;




    if (pruU ==  uf && PruP === pf) {


        alert("bien")
        console.log("que bien")

    } else {

        console.log("que lio")
    }


}


