// Pedimos los characters (personajes que vamos a buscar mediante la peticion a la API).
/*
    Primero, voy a comprobar que funciona y que me devuelve los characters que quiero por consola. Para ello:
*/

const aplicacion = document.querySelector('.container')

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(personaje => {
            console.log(personaje.id)
            const p = document.createElement('p')
            p.innerHTML = personaje.id
            aplicacion.appendChild(p)
            const img = document.createElement('img')
            img.innerHTML = personaje.image
            aplicacion.appendChild(img)
        });
    })

    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data))