const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {

  return employees.some((element) => element.managers.includes(id));
}
// console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employeesId = employees.filter((element) => element.managers.includes(managerId));
    return employeesId.map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = { isManager, getRelatedEmployees };
