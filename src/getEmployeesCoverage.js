const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const people = (obj) => {
//   const person = employees.find((element) =>
//     element.firstName === obj.name || element.lastName === obj.name || element.id === obj.id);
//   return person;
// };

const employeeObj = (obj) => {
  const person = employees.find((element) =>
    element.firstName === obj.name || element.lastName === obj.name || element.id === obj.id);

  const animalsNames = person.responsibleFor.map((element1) =>
    species.find((element2) => element2.id === element1).name);

  const getLocations = person.responsibleFor.map((element1) =>
    species.find((element2) => element2.id === element1).location);

  const mainReturn = {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: animalsNames,
    locations: getLocations,
  };
  return mainReturn;
};

const isEmployee = (obj) => {
  const notEmployee = employees.some((element) =>
    element.firstName === obj.name || element.lastName === obj.name || element.id === obj.id);
  return notEmployee;
};

const notEmployeeObj = () => {
  const mainReturnArr = [];
  for (let index = 0; index < employees.length; index += 1) {
    const animalsNames = employees[index].responsibleFor.map((element1) =>
      species.find((element2) => element2.id === element1).name);
    const getLocations = employees[index].responsibleFor.map((element1) =>
      species.find((element2) => element2.id === element1).location);
    const mainReturn = {
      id: employees[index].id,
      fullName: `${employees[index].firstName} ${employees[index].lastName}`,
      species: animalsNames,
      locations: getLocations,
    };
    mainReturnArr.push(mainReturn);
  }
  return mainReturnArr;
};

function getEmployeesCoverage(obj) {
  if (!obj) {
    return notEmployeeObj();
  }
  if (!isEmployee(obj)) {
    throw new Error('Informações inválidas');
  }
  return employeeObj(obj);
}
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
