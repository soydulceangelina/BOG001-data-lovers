// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
const dataPokemon = data.pokemon;
const root = document.getElementById("root");

const printCharacters = () => {
    const view = dataPokemon.map((character) => {
        let candyCount = character.candy_count;
        if(candyCount === undefined){
            candyCount = 0
        }
        return`
        <article class="pokemon-item">
            <a href="#/${character.id}/" class="card-container">
                <img src="${character.img}" alt="${character.name}"
                <h2>${character.name}</h2>
            </a>
            <h1 class="details-items">Detalles</h1>
            <section class="details-container">
                <h2><span class="flaticon-fengshui icons-details"></span>${character.type}</h2>
                <h2><span class="flaticon-dimension-of-line-height icons-details"></span>${character.height}</h2>
                <h2><span class="flaticon-dumbbell icons-details"></span>${character.weight}</h2>
                <h2><span class="flaticon-candy icons-details"></span>${candyCount} caramelos</h2>
            </section>
        </article>`
    }).join('');

    root.innerHTML = view;
 };

 function addEventsToCards() {
    let pokeCards = document.querySelectorAll(".pokemon-item");
    pokeCards.forEach(card => {
        let pokeDetails = card.querySelector(".details-container")
        const showDetails = () =>{
            pokeDetails.classList.add("is-open");
        }
    
        const hideDetails = () =>{
            pokeDetails.classList.remove("is-open");
        }
        
        card.addEventListener("mouseover", showDetails);
        card.addEventListener("mouseout", hideDetails);
    })
 }

window.addEventListener("load", () => {
    printCharacters()
    addEventsToCards()
});

// -----------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------

let infoIcons = document.querySelector(".info-bar");
const infoIconsBotton = document.querySelector("#infoMenu");

const hideShowInfoIcons = () => {
    if(infoIcons.classList.contains("is-active")){
        infoIcons.classList.remove("is-active");
    }else{
        infoIcons.classList.add("is-active");
    }
};

infoIconsBotton.addEventListener("click", hideShowInfoIcons);
