import {filterByType} from '../src/data.js';
import { alfabeticFilter } from '../src/data.js';
import { searchPokemon } from '../src/data.js';


describe('filterByType', () => {
  it('debería ser una funcion', () => {
    expect(typeof filterByType).toBe('function');
  });
  it('debería retornar un arreglo', () => {
    expect(filterByType()).toStrictEqual([]);
  });
  it('debería ser un objeto', () => {
    expect(typeof filterByType("")).toBe("object");
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
});

describe('searchPokemon', () => {
  it('debería ser una funcion', () => {
    expect(typeof searchPokemon).toBe('function');
  });

  it.skip('returns `anotherExample`', () => {
  });
});