import { filterByType } from './data.js';
import { alfabeticFilter } from './data.js';
import { searchPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

const dataPokemon = data.pokemon;
const root = document.getElementById("root");
const typeFilter = document.getElementById("typeFilter");
const ordenFilter = document.getElementById("ordenFilter");
const search = document.getElementById("search");


export const printCharacters = (avatars) => {
        const view = avatars.map((character) => {
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
                        <h2 class="candy-count"><span class="flaticon-candy icons-details"></span>${candyCount} para evolucionar</h2>
                    </section>
                </article>`
        }).join('');

    root.innerHTML = view;
 };


const addEventsToCards = () => {

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

const hideTypeMenu = () => {
    const types = []
    dataPokemon.forEach(({ type }) => {
        type.forEach(t => {
            if (!types.includes(t)) {
                types.push(t)
            }
        })
    })

    types.forEach((pokeType) => {
        const option = document.createElement('option')
        option.setAttribute('value', pokeType)
        option.innerText = pokeType
        typeFilter.appendChild(option)
    })
}


const nonExistent = () =>{
    root.innerHTML = "Pokémon no encontrado";
}

window.addEventListener("load", () => {
    printCharacters(dataPokemon)
    addEventsToCards()
    hideTypeMenu()
});

typeFilter.addEventListener("change", (event) =>{

    const filteredByOrder = alfabeticFilter(ordenFilter.value);
    const filteredByName = searchPokemon(search.value, filteredByOrder);
    const filtered = filterByType(event.target.value, filteredByName);
    printCharacters(filtered)
    addEventsToCards()
})

ordenFilter.addEventListener("change", (event) =>{
    const filteredByName = searchPokemon(search.value);
    const filteredByType = filterByType(typeFilter.value, filteredByName);
    const filtered = alfabeticFilter(event.target.value, filteredByType);
    printCharacters(filtered)
    addEventsToCards()
})

search.addEventListener("keyup", (event)=> {
    const filteredByOrder = alfabeticFilter(ordenFilter.value);
    const filteredByType = filterByType(typeFilter.value, filteredByOrder);
    const filtered = searchPokemon(event.target.value, filteredByType);
    if(filtered.length === 0){
        nonExistent();
    }else{
        printCharacters(filtered);
        addEventsToCards();
    }
})

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
