const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animalsObj = species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, []);

    const sorted = Object.keys(animalsObj).sort().reduce((acc, curr) => {
      acc[curr] = animalsObj[curr];
      return acc;
    }, {});

    return sorted;
  }

  const maleOrFemale = species.find((element) => element.name === animal.specie)
    .residents.filter((element) => element.sex === animal.sex);

  if (animal.sex) {
    return maleOrFemale.length;
  }
  
  return species.find((element) => element.name === animal.specie).residents.length;
}
// console.log(countAnimals({ specie: 'penguins' }));
// https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380

module.exports = countAnimals;
