import data from './data/pokemon/pokemon.js';

export const filterByType = (typePoke, pokeData = data.pokemon) => {
  if(typePoke === ""){
    return pokeData;
  }else{
    return pokeData.filter(poke => {
      return poke.type.includes(typePoke)
    })
  }
};

export const alfabeticFilter = (alfa, pokeData = data.pokemon) => {
  const pokemons = [...pokeData]
  if (alfa === ""){
    return pokemons;
  }
  if (alfa === "a-z"){
    return pokemons.sort((prev, next) => {
      if(prev.name > next.name){
        return 1;  
      } else {
        return -1;
      }
    })

  }
  if(alfa === "z-a"){
    return pokemons.sort((prev, next) => {
      if(prev.name < next.name){
        return 1;  
      } else {
        return -1;
      } 
    })
  }
}

export const searchPokemon = (order, pokeData = data.pokemon) => {
  if(order === "") {
    return pokeData;
  }
  else{
    return pokeData.filter (poke => {
      return poke.name.toLowerCase().startsWith(order.toLowerCase())
    })
  }
}
