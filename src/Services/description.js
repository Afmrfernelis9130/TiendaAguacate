import {price} from "./inputValid.js" ;
    
    const container = document.querySelector(".container");
    const API = 'https://platzi-avo.vercel.app';

        const stringItem =  localStorage.getItem('item')
         const itemObject = JSON.parse(stringItem);

         //Formato de precio
          const priceFormat = new price();
          


    const detailCard = async ()=> await  fetch(`${API}/api/avo`).then(prueba => prueba.json())
    .then ( data => {
        let arry = data.data.find( id => id.id ==='2zd33b8c')

          //Crear una carta 
          const card = document.createElement ("div");
          card.classList.add("card");
          
          //Crear div para la cantidad y el boton
          const containerChild = document.createElement("div");
          containerChild.classList.add("addAmount");


          //Ananimos la imagen de aguacate en la carta
          const img = document.createElement("img");
          img.classList.add("img-descripcion");
          img.src = `${API}${itemObject.image}`;

          //Anadimos el nombre del aguacate 
          const name = document.createElement("h1");
          name.classList.add("name-description");
          name.textContent = `${itemObject.name}`

          //Anadimos la descripcion
           const description = document.createElement ("p");
           description.classList.add("desc-description");
           description.textContent= `${itemObject.attributes.description}`;

          //Anadimos el precio 
          const price = document.createElement ("p");
          price.classList.add("price-description");
          price.textContent = priceFormat.formatPrice( itemObject.price) ;

          //Anadimos el boton
          const button  = document.createElement("button");
          button.classList.add("btn-description");
          button.textContent="Add to card";
          
          //Anadimos input para la cantidad 
          const input = document.createElement("input")
          input.classList.add("input-description");
          input.setAttribute("type","number");
         

          //Insertamos los elementos
         container.appendChild(card);
         card.appendChild(img);
         card.appendChild(name);
         card.appendChild(description);
         card.appendChild(price);
         card.appendChild(containerChild);
         containerChild.appendChild(input);
         containerChild.appendChild(button);

       

         

      
    });

    detailCard();
   
        
   
            


             
          
          
        
