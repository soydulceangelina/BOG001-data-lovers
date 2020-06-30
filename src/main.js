// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
const dataPokemon = data.pokemon;
const root = document.getElementById("root");

const printCharacters = () => {
    const view = dataPokemon.map((character, index) => {
        return `
        <article class="pokemon-item">
            <a href="#/${character.id}/" class="card-container">
                <img src="${character.img}" alt="${character.name}"
                <h2>${character.name}</h2>
            </a>
            <details id="pokemon-${index}"class="details-container">
                <summary class="details-items">Detalles</summary>
                <h2><span class="flaticon-fengshui icons-details"></span>${character.type}</h2>
                <h2><span class="flaticon-dimension-of-line-height icons-details"></span>${character.height}</h2>
                <h2><span class="flaticon-dumbbell icons-details"></span>${character.weight}</h2>
                <h2><span class="flaticon-candy icons-details"></span>${character.candy_count} caramelos</h2>
            </details>
        </article>`
    }
    ).join('');

    root.innerHTML = view;
 }

window.addEventListener("load", printCharacters);


let menu = document.querySelector(".filter-bar");
const burgerButton = document.querySelector("#burgerMenu");

const hideShow = () => {
    if(menu.classList.contains("is-active")){
        menu.classList.remove("is-active");
    }else{
        menu.classList.add("is-active");
    }
};

burgerButton.addEventListener("click", hideShow);