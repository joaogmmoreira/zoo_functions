const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // const employeesId = employees.filter((element) => element.id === id)[0].id;
  // return employeesId;

  // if (employeesId === '9e7d4524-363c-416a-8759-8aa7e50c0992'
  // || employeesId === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
  // || employeesId === '0e7b460e-acf4-4e17-bcb3-ee472265db83') {
  //   return true;
  // }
  // return false;
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
// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
