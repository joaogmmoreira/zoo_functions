const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(obj) {
  const person = employees.filter((element) =>
    element.firstName === obj.name || element.lastName === obj.name);
  const animalsIdResponsibilities = person.map((element) => element.responsibleFor);
  const animalsNamesResponsibilities = 
  return animalsNamesResponsibilities;
  // const result = person.map((element) => {
  //   return {
  //     id: element.id,
  //     fullname: `${element.firstName} ${element.lastName}`,
  //     species: 
  //   };
  // });
  // return result;
}
console.log(getEmployeesCoverage({ name: 'Nigel' }));

module.exports = getEmployeesCoverage;
