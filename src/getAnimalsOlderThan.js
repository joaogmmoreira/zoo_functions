const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((element1) => element1.name === animal).residents
    .every((element2) => element2.age >= age);
  // return animalResidents;
  // return residentsAnimals.every((element2) => element2.age >= age);
}
// console.log(getAnimalsOlderThan('tigers', 25));

module.exports = getAnimalsOlderThan;
