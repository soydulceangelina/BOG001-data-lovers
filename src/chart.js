import data from './data/pokemon/pokemon.js';
const dataPokemon = data.pokemon;
const myChart = document.querySelector("#myChart").getContext("2d");
const myCharts = document.querySelector("#myCharts").getContext("2d");
const newPokeData = [{name:"Pikachu", height:0.71},{name:"Charizard", height:1.70},{name:"Squirtle", height:0.51},{name:"Jigglypuff", height:0.51},{name:"Eevee", height:0.30}];
const weightPokeData = [{name:"Snorlax", weight:460.0},{name:"Golem", weight:300.0},{name:"Gyarados", weight:235.0},{name:"Lapras", weight:220.0},{name:"Dragonite", weight:210.0}];
const cardsContainer = document.getElementById("cards");
const cardContainer = document.getElementById("cardDos");

export const printCharactersTall = () => {
    const pokeName = newPokeData.map(p => p.name)
    const view = dataPokemon.map((character) => {
        if(pokeName.includes(character.name)){
            return`
                <article class="pokemon-cards-canva">
                    <a href="#/${character.id}/" class="card-container">
                        <img src="${character.img}" alt="${character.name}"
                        <h2>${character.name}</h2>
                        <h2><span class="flaticon-dimension-of-line-height icons-details"></span>${character.height}</h2>
                    </a>
                </article>`
        }
    }).join('');
    cardsContainer.innerHTML = view;
};

window.addEventListener("load", printCharactersTall);

const ourCanvas = new Chart(myChart,{
    type:"doughnut",
    data:{
        labels: newPokeData.map(p => p.name),
        datasets: [{
            label:"Pokemon mas grande",
            data: newPokeData.map(x => x.height),
            backgroundColor:[
                "rgb(255, 203, 5)",
                "rgb(42, 117, 187)",
                "rgb(199, 160, 8)",
                "rgb(60, 90, 166)",
                "rgb(255, 135, 72)"
            ]
        }]
    },
    options: {
        responsive: true
    }
});

export const printCharactersWeight = () => {
    const pokeName = weightPokeData.map(p => p.name)
    const view = dataPokemon.map((character) => {
        if(pokeName.includes(character.name)){
            return`
                <article class="pokemon-cards-canva">
                    <a href="#/${character.id}/" class="card-container">
                        <img src="${character.img}" alt="${character.name}"
                        <h2>${character.name}</h2>
                        <h2><span class="flaticon-dimension-of-line-height icons-details"></span>${character.weight}</h2>
                    </a>
                </article>`
        }
    }).join('');
    cardContainer.innerHTML = view;
};

window.addEventListener("load", printCharactersWeight);

const ouCanvas = new Chart(myCharts,{
    type:"bar",
    data:{
        labels: weightPokeData.map(p => p.name),
        datasets: [{
            label:"Pokemon mas pesado",
            data: weightPokeData.map(x => x.weight),
            backgroundColor:[
                "red",
                "rgb(42, 117, 187)",
                "rgb(199, 160, 8)",
                "rgb(60, 90, 166)",
                "rgb(255, 135, 72)"
            ]
        }]
    },
    options: {
        responsive: true
    }
});