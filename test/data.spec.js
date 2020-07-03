import {filterByType} from '../src/data.js';


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


describe('anotherExample', () => {
  it.skip('is a function', () => {
  });

  it.skip('returns `anotherExample`', () => {
  });
});