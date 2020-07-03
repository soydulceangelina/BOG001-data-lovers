import data from './data/pokemon/pokemon.js';

export const filterByType = (typePoke) => {
  if(typePoke === ""){
    return data.pokemon;
  }else{
    return data.pokemon.filter(poke => {
      return poke.type.includes(typePoke)
    })
  }
};
 

