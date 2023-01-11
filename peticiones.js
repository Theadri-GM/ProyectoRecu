// Pedimos los characters (personajes que vamos a buscar mediante la peticion a la API).
/*
    Primero, voy a comprobar que funciona y que me devuelve los characters que quiero por consola. Para ello:
*/

const input = document.querySelector("input");
const aplicacion = document.querySelector('.container');
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    busquedaPersonajes(input.value);

})

function busquedaPersonajes(personaje){
    fetch(`https://rickandmortyapi.com/api/character/?name=${personaje}`)
    .then(response => response.json())
    .then(data => {data.results.forEach(personaje => {
        crearPersonaje(personaje);
    });
});
}

fetch(`https://rickandmortyapi.com/api/character`)
    .then(response => response.json())
    .then(data => {data.results.forEach(personaje => {
        crearPersonaje(personaje);
    });
});

function crearPersonaje(personaje){
    const contenido = document.createElement('div');
    contenido.classList.add('personajes');

    const imagenes = document.createElement('div');
    imagenes.classList.add('imagenes');

    const imagen = document.createElement('img');
    imagen.src = personaje.image

    const id = document.createElement('p');
    id.textContent =`#${personaje.id.toString()}`;

    const nombre = document.createElement('p');
    nombre.classList.add('nombre');
    nombre.textContent = personaje.name;

    contenido.appendChild(imagen);
    contenido.appendChild(id);
    contenido.appendChild(nombre);

    aplicacion.appendChild(contenido);
}