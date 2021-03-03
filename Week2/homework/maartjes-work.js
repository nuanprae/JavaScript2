'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  const durationsInHours = tasks.map(task => task.duration / 60);
  const durationsForCalc = durationsInHours.filter(duration => duration >= 2);
  const earnings = durationsForCalc.map(duration => duration * hourlyRate);
  const totalEarnings = earnings.reduce((total, earning) => total + earning, 0);
  return totalEarnings;
}
console.log(computeEarnings(maartjesTasks, maartjesHourlyRate));

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
const rounded = earnings.toFixed(2);
// add code to convert `earnings` to a string rounded to two decimals (euro cents)
console.log(`Maartje has earned €${rounded}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
