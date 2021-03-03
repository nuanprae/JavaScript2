'use strict';

const doubleOddNumbers = numbers => {
  const oddNumbers = numbers.filter(number => number % 2 !== 0);
  return oddNumbers.map(oddNumber => oddNumber * 2);
};

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
