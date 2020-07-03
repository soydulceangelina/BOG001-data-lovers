//funciones para ordenar de forma descendete y ascendente
// Se factorizan todas las funciones para que devuelven el array en el orden deseado
function sortNumDesc(arrayPokemones) {
  let arrPokemonesNumDesc = arrayPokemones;
  arrPokemonesNumDesc = arrPokemonesNumDesc.sort((a, b) => {
    if (parseInt(a.num) < parseInt(b.num))
      return 1
    else
      return -1
  })
  return arrPokemonesNumDesc
}

function sortNumAsc(arrayPokemones) {
  let arrPokemonesNumAsc = arrayPokemones;
  arrPokemonesNumAsc = arrPokemonesNumAsc.sort((a, b) => {
    if (parseInt(a.num) > parseInt(b.num))
      return 1
    else
      return -1
  })
  return arrPokemonesNumAsc
}
