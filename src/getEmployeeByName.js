const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const employeeByName = employees.find((element) =>
  element.firstName === employeeName || element.lastName === employeeName);

  return employeeByName;
}

// console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
