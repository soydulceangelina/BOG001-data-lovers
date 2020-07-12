import {filterByType} from '../src/data.js';
import { alfabeticFilter } from '../src/data.js';
import { searchPokemon } from '../src/data.js';
import { fullData } from '../src/mocks';


describe('filterByType', () => {
  it('debería ser una funcion', () => {
    expect(typeof filterByType).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(filterByType()).toStrictEqual([]);
  });
  it('debería ser un objeto', () => {
    expect(typeof filterByType("")).toBe("object");
  });
  it('debería retornar [{name:"Pikachu",type: ["Electric"]}] para tipo Electric', () => {
    expect(filterByType("Electric", fullData)).toStrictEqual([{name:"Pikachu",type: ["Electric"]}]);
  });
  it('debería retornar un arry vacio para 1', () => {
    expect(filterByType(1, fullData)).toStrictEqual([]);
  });
});

describe('alfabeticFilter', () => {
  it('debería ser una funcion', () => {
    expect(typeof alfabeticFilter).toBe('function');
  });
  it('debería ser un objeto', () => {
    expect(typeof alfabeticFilter("")).toBe("object");
  });
  it('debería ser un objeto', () => {
    expect(typeof alfabeticFilter("z-a")).toBe("object");
  });
  it('debería ser un objeto', () => {
    expect(typeof alfabeticFilter("a-z")).toBe("object");
  });
  it('debería retornar false para [{"name": "Bulbasaur"},{"name": "charmander"}]', () => {
    expect(alfabeticFilter([{"name": "Bulbasaur"},{"name": "charmander"}])).toBeFalsy();
  });
  it('debería retornar un array ordenado de la a-z', () => {
    expect(alfabeticFilter("a-z", fullData)).toStrictEqual( [
      {name:"Bulbasaur",
      type: ["Grass","Poison"]},
      {name:"Charmander",
      type: ["Fire"]},
      {name:"Gastly",
      type: ["Ghost","Poison"]},
      {name:"Meowth",
      type: ["Normal"]},
      {name:"Pikachu",
      type: ["Electric"]},
      {name:"Squirtle",
      type: ["Water"]}]);
  });
  it('debería retornar un array ordenado de la z-a', () => {
    expect(alfabeticFilter("z-a", fullData)).toStrictEqual( [
      {name:"Squirtle",
      type: ["Water"]},
      {name:"Pikachu",
      type: ["Electric"]},
      {name:"Meowth",
      type: ["Normal"]},
      {name:"Gastly",
      type: ["Ghost","Poison"]},
      {name:"Charmander",
      type: ["Fire"]},
      {name:"Bulbasaur",
      type: ["Grass","Poison"]}]);
  });
});

describe('searchPokemon', () => {
  it('debería ser una funcion', () => {
    expect(typeof searchPokemon).toBe('function');
  });
  it('debería ser un objeto', () => {
    expect(typeof searchPokemon("pikachu")).toBe("object");
  });
  it('debería ser un objeto', () => {
    expect(typeof searchPokemon("")).toBe("object");
  });
  it('debería retornar [{name:"Pikachu",type: ["Electric"]}] para "pi"', () => {
    expect(searchPokemon("pi", fullData)).toStrictEqual([{name:"Pikachu",type: ["Electric"]}]);
  });
  it('debería retornar array vacio para "f"', () => {
    expect(searchPokemon("f", fullData)).toStrictEqual([]);
  });
});