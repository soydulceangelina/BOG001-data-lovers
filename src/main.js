import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
const dataPokemon = data.pokemon;
const root = document.getElementById("root");

const printCharacters = () => {
    const view = dataPokemon.map(character => `
        <article class="pokemon-item">
            <a href="#/${character.id}/" class="card-container">
                <img src="${character.img}" alt="${character.name}"
                <h2>${character.name}</h2>
            </a>
            <details class="details-container">
                <summary class="details-items">Detalles</summary>
                <h2>${character.type}</h2>
                <h2>${character.height}</h2>
                <h2>${character.weight}</h2>
            </details>
        </article>`
    ).join('');

    root.innerHTML = view;
 }

window.addEventListener("load", printCharacters);
