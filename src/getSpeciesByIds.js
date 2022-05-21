const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  // const arr = [];
  // for (let i = 0; i < species.length; i += 1) {
  //   if (species[i].id === ids) {
  //     arr.push(species[i]);
  //     return arr;
  //   }
  // }
  return species.filter((element) => ids.includes(element.id));
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
