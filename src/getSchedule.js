const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const animals = species.map((element) => element.name); // console.log(animals);
  const daysOfTheWeek = Object.keys(hours); // console.log(daysOfTheWeek);
  if (animals.includes(scheduleTarget)) {
    const schedule1 = species.find((element) => element.name === scheduleTarget).availability;
    return schedule1;
  }
  if (daysOfTheWeek.includes(scheduleTarget)) {
    const schedule2 = species.filter((element) => element.availability.includes(scheduleTarget));
    return schedule2;
  }
  const object = {
    Tuesday: {
      officeHour: Object.values(hours),
      exhibition: species.filter((element1) => element1.availability
        .includes('Tuesday')).map((element2) => element2.name),
    },
  };
  return object;
}

console.log(getSchedule());

module.exports = getSchedule;
