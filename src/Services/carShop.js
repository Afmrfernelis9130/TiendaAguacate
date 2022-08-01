const items= document.getElementById("items");
const templateFooter = document.getElementById("templates-footer").contains;
const footer = document.getElementById('footer');
const templateCar = document.getElementById("template-car").contains;
const fragment = document.createDocumentFragment();
const btn= document.getElementById('btn-aguacate');
let car = [];


btn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log("hola")

})

const addToCar = e => {

    //con esto obtengo el id del elemento que se ha pulsado
    if (e.target.classList.contains('btn-dark')) {

        //con esto capturo el tag completo
        setOnCar(e.target.parentElement);

    }


    e.stopPropagation();
}


const setOnCar = obj => {

    const product={
        id: obj.document.getElementsByTagName("button").dataset.id,
        title: obj.querySelector('h5').textContent,
        price: obj.querySelector('p').textContent,
        cant:1


    }


    if (car.hasOwnProperty(product.id)) {
        product.cant = car[product.id].cant + 1;
    }


    car[product.id] = {...product}

    printCarShop(car)

}


const printCarShop = () => {
    items.innerHTML = '';

    Object.values(car).forEach(element => {

        templateCar.querySelector('th').textContent = element.id;
        templateCar.querySelectorAll('td')[0].textContent = element.title;
        templateCar.querySelectorAll('td')[1].textContent = element.cant;
        templateCar.querySelector('.btn-info').dataset.id = element.id;
        templateCar.querySelector('.btn-danger').dataset.id = element.id;
        templateCar.querySelector('span').textContent = (element.cant * element.price).toString();


        const clone = templateCar.cloneNode(true)

        fragment.appendChild(clone);
    })

    items.appendChild(fragment);

    printFooter();

}


const printFooter = () => {
    footer.innerHTML = '';

    if (Object.keys(car).length === 0) {

        items.innerHTML = '  <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th> ';
    }

    const nCant = Object.values(car).reduce((acc, {cant}) => acc + cant, 0);
    const nPrice = Object.values(car).reduce((acc, {price, cant}) => acc + (price * cant), 0);

    templateFooter.querySelectorAll('td')[0].textContent = nCant.toString();
    templateFooter.querySelector('span').textContent = nPrice.toString();

    const clone = templateFooter.cloneNode(true)
    footer.appendChild(clone);
    footer.appendChild(fragment);

}
