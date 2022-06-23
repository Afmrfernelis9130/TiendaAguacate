const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footer = document.getElementById('footer');
const templateCard = document.getElementById('template-card').content;
const templateFooter = document.getElementById('template-footer').content;
const templateCar = document.getElementById('template-carrito').content;
const fragment = document.createDocumentFragment()
let car = {};


//con esto llamo a la funcion que me trae los datos
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
});

//con este evento capturo el click en el boton de agregar al carrito
cards.addEventListener('click', (e) => {
    addToCar(e);

})

//con esta funcion llamo a la api
const fetchData = async () => {


    try {
        const response = await fetch('api.json');
        const data = await response.json();
        //console.log(data);
        printCards(data)

    } catch (err) {
        console.log(err);
    }

}


//con esta funcion creo los cards
const printCards = data => {


    data.forEach(element => {

        templateCard.querySelector('h5').textContent = element.title;
        templateCard.querySelector('p').textContent = element.price;
        templateCard.querySelector('img').setAttribute('src', element.thumbnailUrl);
        templateCard.querySelector('.btn-dark').dataset.id = element.id;
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);

}


//con esta funcion agrego los productos al carrito
const addToCar = e => {

    //con esto obtengo el id del elemento que se ha pulsado
    if (e.target.classList.contains('btn-dark')) {

        //con esto capturo el tag completo
        setOnCar(e.target.parentElement);

    }


    e.stopPropagation();
}

//con esta funcion guardo los datos del producto en el carrito
const setOnCar = obj => {
    const product = {
        id: obj.querySelector('.btn-dark').dataset.id,
        title: obj.querySelector('h5').textContent,
        price: obj.querySelector('p').textContent,
        cant: 1
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



