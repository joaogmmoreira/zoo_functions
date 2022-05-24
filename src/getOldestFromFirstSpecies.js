const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((element) => element.id === id);
  const firstAnimal = employee.responsibleFor[0];
  const firstAnimalName = species.find((element) => element.id === firstAnimal).name;
  const oldestAnimalAge = species.find((element) => element.name === firstAnimalName)
    .residents.map((element2) => element2.age).sort((a, b) => b - a)[0];
  const oldestAnimalObj = species.find((element) => element.name === firstAnimalName).residents
    .filter((element2) => element2.age === oldestAnimalAge);
  const oldestAnimalArr = oldestAnimalObj.map((element) =>
    Object.values(element));
  return oldestAnimalArr;
}
// https://stackoverflow.com/questions/34309090/convert-array-of-objects-into-array-of-properties

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
