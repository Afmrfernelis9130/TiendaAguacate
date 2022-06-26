    const container = document.querySelector(".container");
    
 

    
    const API = 'https://platzi-avo.vercel.app';
 
  

    fetch(`${API}/api/avo`).then(prueba=> prueba.json())
    .then((data)=> {
        
        data.data.forEach(element => {
            //Creamos las cartas que estaran dentro del container
            const cuerpo = document.createElement("div");
            cuerpo.classList.add("card")

            //Adanimos la imagen de aguacate en la carta
            const img = document.createElement("img");
            img.classList.add("img-aguacate");
            img.src = `${API}${element.image}`;

            //Adanimos el texto del aguacate 
            const name = document.createElement("h2");
            name.classList.add("name-aguacate");
            name.textContent = `${element.name}`;

            //Anadimos la descripcion del aguacate 
            const description = document.createElement("small")
            description.classList.add("des-aguacate");
            description.textContent=(`${element.attributes.description}`)


            //Anadimos el precio del aguacate 
            const price = document.createElement("p");
            price.classList.add("price-aguacate");
            price.textContent = `${element.price}`;
             


             //Lo inyectamos en el doc html
             container.appendChild(cuerpo);
             cuerpo.appendChild(img);
             cuerpo.appendChild(name);
             cuerpo.appendChild(description);
             cuerpo.appendChild(price);
           


           


            
        });
       
        
    }).catch(Error => console.error(Error))
  

  

