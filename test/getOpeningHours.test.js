const { internet } = require('faker/lib/locales/pt_BR');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('passando os argumentos monday e 09:00-AM retorna The zoo is closed', () => {
    expect(getOpeningHours('monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('passando os argumentos Monday e 09:00-AM retorna The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('passando os argumentos tuesday e 09:00-AM retorna The zoo is open', () => {
    expect(getOpeningHours('tuesday', '08:00-AM')).toBe('The zoo is open');
  });
  it('passando os argumentos Friday e 12:00-BM retorna um erro', () => {
    expect(() => { getOpeningHours('Friday', '12:00-BM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('passando os argumentos Thu e 12:00-PM retorna um erro', () => {
    expect(() => { getOpeningHours('Thu', '12:00-PM'); }).toThrow('The day must be valid. Example: Monday');
  });
  it('passando os argumentos Saturday e c2:00-PM retorna um erro', () => {
    expect(() => { getOpeningHours('Saturday', 'c2:00-PM'); }).toThrow('The hour should represent a number');
  });
  it('passando os argumentos Saturday e 12:c0-PM retorna um erro', () => {
    expect(() => { getOpeningHours('Saturday', '12:c0-PM'); }).toThrow('The minutes should represent a number');
  });
  it('passando os argumentos Saturday e 13:00-PM retorna um erro', () => {
    expect(() => { getOpeningHours('Saturday', '13:00-PM'); }).toThrow('The hour must be between 0 and 12');
  });
  it('passando os argumentos Saturday e 12:72-PM retorna um erro', () => {
    expect(() => { getOpeningHours('Saturday', '12:72-PM'); }).toThrow('The minutes must be between 0 and 59');
  });
});

// https://stackoverflow.com/questions/49027595/jest-test-that-exception-will-be-thrown-isnt-working
