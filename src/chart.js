import data from './data/pokemon/pokemon.js';
const dataPokemon = data.pokemon;
const myChart = document.querySelector("#myChart").getContext("2d");
const newPokeData = [{name:"Bulbasaur"},{name:"Charizard"},{name:"Squirtle"},{name:"Pikachu"},{name:"Meowth"},{name:"Gengar"}];
const newPokeDataEvolution = [{name:"Bulbasaur"},{name:"Charmander"},{name:"Squirtle"},{name:"Pikachu"},{name:"Meowth"},{name:"Gastly"}];
const cardsContainer = document.getElementById("cards");
const evolution = document.getElementById("evolution");
const pokeName = newPokeData.map(p => p.name);
const pokeNameEvolution = newPokeDataEvolution.map(p => p.name);
let slideIndex = 0;

const favEvolution = dataPokemon.map((character)=>{
    if(pokeNameEvolution.includes(character.name)){
        return [
            {
                img: character.img,
                name: character.name
            },
            ...character.next_evolution.map(evolution => {
                return {
                    img: dataPokemon.find(pokemon => pokemon.name === evolution.name).img,
                    name: evolution.name
                }
            })
        ]
    }
}).filter(p => p !== undefined);


export const printCharactersTall = () => {
    const view = dataPokemon.map((character) => {
        if(pokeName.includes(character.name)){
            return`
                <article class="pokemon-cards-evolution">
                    <a href="#/${character.id}/" class="card-container">
                        <img src="${character.img}" alt="${character.name}"
                        <h2>${character.name}</h2>
                        <h3 class="icon"><span class="flaticon-dimension-of-line-height flaticon"></span>${character.height}</h3>
                    </a>
                </article>`
        }
    }).join('');
    cardsContainer.innerHTML = view;
};

export const printEvolution = () => {
    const view = favEvolution.map((evolutions) =>{
        return `
        <article class="cards-evolution">
            ${evolutions.map(character => {
                return `
                    <a class="card-container-evolution">
                        <img src="${character.img}" alt="${character.name}"
                        <h2>${character.name}</h2>
                    </a>
                `
            }).join('')}
        </article>` 
        }).join('');
    evolution.innerHTML= view;
};

export const carousel = () => {
    let x = document.querySelectorAll(".cards-evolution");
    for(let i = 0; i < x.length; i++){
        console.log(x);
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "flex"; 
    setTimeout(carousel, 2500);
};

window.addEventListener("load", () => {
    printCharactersTall(), 
    printEvolution(),
    carousel()
});

const heightFavPokemon = dataPokemon.map((character)=>{
    if(pokeName.includes(character.name)){
        return Number(character.height.replace("m", ""))
    }}).filter(h => h!== undefined);



const ourCanvas = new Chart(myChart,{
    type:"bar",
    data:{
        labels: newPokeData.map(p => p.name),
        datasets: [{
            label:"Quien es mas grande?",
            data: heightFavPokemon,
            backgroundColor:[
                "rgb(260, 70, 15)",
                "rgb(42, 117, 187)",
                "rgb(199, 160, 8)",
                "rgb(60, 90, 166)",
                "rgb(255, 135, 72)",
                "rgb(199, 10, 85)"
            ]
        }]
    },
    options: {
        responsive: true
    }
});

