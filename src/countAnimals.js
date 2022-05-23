const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animalsNames = species.map((element) => element.name);
    const animalsQuantity = species.map((element) => element.residents.length);

    // for (let i = 0; i < animalsNames; i += 1) {
    //   animalObj[animalsNames[i]] = animalsQuantity[i];
    //   console.log(animalObj);
    // }

    return animalObj;
  }
  return species.find((element) => element.name === animal.specie).residents.length;
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
