     import {price} from "./inputValid.js" ;

   //Crear variable para agregar al carrito 
     let newObjet = [];

    //Api para el aguacate
    const API = 'https://platzi-avo.vercel.app';
    //Instanciamos la clave para el formato de moneda
    const priceFormat = new price ();

   const fillCart  = async ()=> await fetch(`${API}/api/avo`)
    .then( data=> data.json())
    .then( data=> {
        //Seleccionar el contenedor***
        const container = document.querySelector(".container");  
          data.data.forEach(element => {
            //Creamos las cartas que estaran dentro del container
            const cuerpo = document.createElement("div");
            cuerpo.classList.add("card");
            cuerpo.dataset.id = element.id; 
           

            //Adanimos la imagen de aguacate en la carta
            const img = document.createElement("img");
            img.classList.add("img-aguacate");
            img.src = `${API}${element.image}`;
            img.dataset.id = element.id;

            //Adanimos el texto del aguacate 
            const name = document.createElement("h2");
            name.classList.add("name-aguacate");
            name.textContent = `${element.name}`;
            name.dataset.id = element.id;
            

            //Anadimos la descripcion del aguacate 
            const description = document.createElement("small")
            description.classList.add("des-aguacate");
            description.textContent=(`${element.attributes.description}`);
           


            //Anadimos el precio del aguacate 
            const price = document.createElement("p");
            price.classList.add("price-aguacate");
            price.textContent = priceFormat.formatPrice(element.price);

            //Anadimos el boton del aguacate
            const button  = document.createElement("button");
            button.classList.add("btn-aguacate");
            button.textContent="Add";
            button.dataset.id = element.id;

             //Lo inyectamos en el doc html
             container.appendChild(cuerpo);
             cuerpo.append(img,name,description,price,button); 
             //Eventos con los botones
             cuerpo.addEventListener ('click' , viewProduct);
             name.addEventListener('click',viewProduct);
             button.addEventListener('click', addToCart);

        }).catch(Error => console.error(Error));

    //Funcion para el adadir el carrito 
    function addToCart (e) {
       if ( e.target.classList.contains('btn-aguacate')) {
           viewProduct
      
        }
	        
       }


    //Funcion para ver el detalle del produc
    function viewProduct (e){
            if  ( e.target.classList.contains('card') ||  e.target.classList.contains('name-aguacate') )   {
                const id = e.target.dataset.id;
                 fetch(`${API}/api/avo/${id}`).then(prueba=> prueba.json())
                .then(data => {
                    localStorage.setItem('item',JSON.stringify(data));
                    window.location.href ='/public/details.html';
      
                }

                

                 
                
                ).catch(err => {
                    console.log(err)});

                

              

            }

           
                
        }
           
              
    }

    );

    fillCart();
