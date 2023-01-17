// Pedimos los characters (personajes que vamos a buscar mediante la peticion a la API).
/*
    Primero, voy a comprobar que funciona y que me devuelve los characters que quiero por consola. Para ello:
*/

const input = document.querySelector("input");
const aplicacion = document.querySelector('.container');
const button = document.querySelector("button");

let historial = [];
let contador = -1;

button.addEventListener("click", (e) => {
    e.preventDefault();
    busquedaPersonajes(input.value);
    contador++;
    historial[contador] = "Busqueda " + contador + ": " + input.value;
    localStorage.setItem("nombre", JSON.stringify(historial));
    console.log(historial[contador]);

})

function busquedaPersonajes(personaje){
    fetch(`https://rickandmortyapi.com/api/character/?name=${personaje}`)
    .then(response => response.json())
    .then(data => {data.results.forEach(personaje => {
        crearPersonaje(personaje);
    });
});
}

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

//Boton guardar historial.
let download = (filename, text) => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

let descargar = document.getElementById('descargar').onclick = function(){
    let busqueda = "Búsquedas de personajes.txt";
    download(busqueda, historial);
}

// Borrar historial.
let borrar = document.getElementById('borrarHistorial').onclick = function(){
    historial = [];
}