// Pedimos los characters (personajes que vamos a buscar mediante la peticion a la API).
/*
    Primero, voy a comprobar que funciona y que me devuelve los characters que quiero por consola. Para ello:
*/

const aplicacion = document.querySelector('.container')

const busquedaPersonajes = event => {
    event.preventDefault();
    const { valor } = event.target.personaje;
    fetch (`https://rickandmortyapi.com/api/character/?name=${valor.toString()}`)
        .then(response => response.json())
        .then(data => crearPersonaje(data))

}

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(personaje => {
            crearPersonaje(personaje);
        });
    })



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

function buscarPersonajes(event){

}