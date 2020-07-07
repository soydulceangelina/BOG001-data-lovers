import {filterByType} from '../src/data.js';
import {alfabeticFilter} from '../src/data.js';

describe('filterByType', () => {
  it('debería ser una funcion', () => {
    expect(typeof filterByType).toBe('function');
  });
  it('debería retornar un arreglo', () => {
    expect(filterByType()).toStrictEqual([]);
  });
  it('debería retornar la data', () => {
    expect(typeof filterByType("")).toBe("object");
  });
});


describe('alfabeticFilter', () => {
  it('debería ser una funcion', () => {
    expect(typeof alfabeticFilter).toBe('function');
  });
  it('debería retornar un arreglo', () => {
    expect(alfabeticFilter("a-z")).toBe("[object]");
  });
  it('debería retornar la data', () => {
    expect(typeof alfabeticFilter("")).toBe("object");
  });
});