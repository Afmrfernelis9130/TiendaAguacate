const item = document.getElementById('item');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment()


document.addEventListener('DOMContentLoaded', () => {
    fetchData()
});


const fetchData = async () => {


    try {
        const response = await fetch('api.json');
        const data = await response.json();
        console.log(data);
        pintarCards(data)

    } catch (err) {
        console.log(err);
    }

}


const pintarCards = data => {

    data.forEach(element => {


        templateCard.querySelector('h5').textContent = element.title;
        templateCard.querySelector('p').textContent = element.price;
        templateCard.querySelector('img').setAttribute('src', element.thumbnailUrl);

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone);
    });
    item.appendChild(fragment);

}







