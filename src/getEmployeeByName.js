const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  return employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  // return employees.filter((element) => element.firstName === employeeName || element.lastName === employeeName);
}

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
