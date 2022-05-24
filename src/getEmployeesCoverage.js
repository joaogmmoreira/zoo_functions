const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(obj) {
  const person = employees.filter((element) =>
    element.firstName === obj.name || element.lastName === obj.name);
  const animalsIdResponsibilities = person.reduce((acc, element) => {
    acc.push(...element.responsibleFor);
    return acc;
  }, []);
  return animalsIdResponsibilities;
}
console.log(getEmployeesCoverage({ name: 'Nigel' }));

module.exports = getEmployeesCoverage;
