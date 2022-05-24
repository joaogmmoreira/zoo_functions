const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysObj = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((element1) => element1.availability
      .includes('Tuesday')).map((element2) => element2.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((element1) => element1.availability
      .includes('Wednesday')).map((element2) => element2.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((element1) => element1.availability
      .includes('Thursday')).map((element2) => element2.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((element1) => element1.availability
      .includes('Friday')).map((element2) => element2.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((element1) => element1.availability
      .includes('Saturday')).map((element2) => element2.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((element1) => element1.availability
      .includes('Sunday')).map((element2) => element2.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function getSchedule(scheduleTarget) {
  const animals = species.map((element) => element.name); // console.log(animals);
  const daysOfTheWeek = Object.keys(hours); // console.log(daysOfTheWeek);
  if (animals.includes(scheduleTarget)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }
  if (daysOfTheWeek.includes(scheduleTarget)) {
    const result = daysObj.find((element) => element.includes(scheduleTarget));
    // .reduce((acc, curr) => {
    //   acc[curr] = daysObj[curr];
    //   return acc;
    // }, {});
    return result;
  }
  return daysObj;
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
