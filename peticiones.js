// Pedimos los characters (personajes que vamos a buscar mediante la peticion a la API).
/*
    Primero, voy a comprobar que funciona y que me devuelve los characters que quiero por consola. Para ello:
*/

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data));