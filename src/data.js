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
export const alfabeticFilter = (alfa) => {
  const pokemons = [...data.pokemon]
  if (alfa ===""){
    return pokemons;
  }
  if ( alfa === "a-z"){
    return pokemons.sort((prev, next)=>{
      if(prev.name > next.name){
        return 1;  
      }
      if (prev.name < next.name){
        return -1;
      }
      return 0;
      
    } )

  }
  if ( alfa === "z-a"){
    return pokemons.sort((prev, next)=>{
      if(prev.name < next.name){
        return 1;  
      }
      if (prev.name > next.name){
        return -1;
      }
      return 0;
      
    } )

  }
}