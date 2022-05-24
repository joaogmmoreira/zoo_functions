const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
//   const employee = data.employees.find((element) => element.id === id);
//   const firstAnimal = employee.responsibleFor[0];
//   const firstAnimalName = species.find((element) => element.id === firstAnimal).name;
//   const oldestAnimalAge = species.find((element) => element.name === firstAnimalName)
//     .residents.map((element2) => element2.age).sort((a, b) => b - a)[0];
//   const oldestAnimalObj = species.find((element) => element.name === firstAnimalName).residents
//     .filter((element2) => element2.age === oldestAnimalAge);
//   const oldestAnimalArr = oldestAnimalObj.map((element) =>
//     Object.values(element));
//   return oldestAnimalArr;
// }
function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((element) => element.id === id);
  const firstAnimalId = employee.responsibleFor[0];
  const firstAnimalName = species.find((element) => element.id === firstAnimalId).name;
  const oldestAnimalAge = species.find((element) => element.name === firstAnimalName)
    .residents.map((element2) => element2.age).sort((a, b) => b - a)[0];
  const oldestAnimalObj = species.find((element) => element.name === firstAnimalName).residents
    .filter((element2) => element2.age === oldestAnimalAge);
  const oldestAnimalArr = oldestAnimalObj.map((element) => Object.values(element));
  return oldestAnimalArr[0];
}

// https://stackoverflow.com/questions/34309090/convert-array-of-objects-into-array-of-properties

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
