import peliculas from './peliculas.js'



const peliculasAccion = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
const peliculasThriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
const peliculasAventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));
const peliculasImgUrl = 'https://image.tmdb.org/t/p/w200';

document.addEventListener('DOMContentLoaded', () => {
    mostrarPeliculas(peliculasAccion, 'genero-28');
    mostrarPeliculas(peliculasThriller, 'genero-53');
    mostrarPeliculas(peliculasAventura, 'genero-12');
});

function mostrarPeliculas(peliculas, generoId) {
    const contenedor = document.getElementById(generoId).querySelector('.pelicula-container');

    peliculas.forEach(pelicula => {
        const li = document.createElement('li');
        const imagen = document.createElement('img');
        imagen.src = peliculasImgUrl + pelicula.poster_path;
        imagen.alt = pelicula.title;

        const nombrePelicula = document.createElement('p');
        nombrePelicula.textContent = pelicula.title;

        li.appendChild(imagen);
        li.appendChild(nombrePelicula);
        contenedor.appendChild(li);
    });
}

