const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entrants.filter((element) => element.age >= 50);

  const totalEntrants = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };

  return totalEntrants;
}
// console.log(countEntrants(entrants));

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
    // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
    // para checagem de objetos vazios
  }
  /*  const total = {
    child: Object.values(countEntrants(entrants))[0] * prices.child,
    adult: Object.values(countEntrants(entrants))[1] * prices.adult,
    senior: Object.values(countEntrants(entrants))[2] * prices.senior,
  }; */
  const total = {
    child: countEntrants(entrants).child * prices.child,
    adult: countEntrants(entrants).adult * prices.adult,
    senior: countEntrants(entrants).senior * prices.senior,
  };
  return Object.values(total).reduce((acc, cur) => cur + acc);
}
// console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
