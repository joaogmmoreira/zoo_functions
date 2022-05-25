const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se HandlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('testa se handlerElephants recebendo um parâmetro count retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Recebe um argumento que não é uma string e retorna mensagem Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(27)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Recebe um argumento Undefined, e retorna undefined', () => {
    expect(handlerElephants(undefined)).toBe(undefined);
  });
  it('Para o argumento location deve retornar a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Para o argumento vazio deve retornar null', () => {
    expect(handlerElephants('qualquercoisa')).toBe(null);
  });
});
