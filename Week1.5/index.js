const inventory = [
  {
    product: 'Milk, 1L carton',
    best_before: '2018-10-04',
    price: 15.5,
  },
  {
    product: 'Milk, 1L carton',
    best_before: '2018-10-04',
    price: 15.5,
  },
  {
    product: 'Eggs 12pcs',
    best_before: '2018-10-04',
    price: 35.0,
  },
  {
    product: 'Swedish meatballs',
    best_before: '2018-10-25',
    price: 22.0,
  },
];
const stringifiedData = JSON.stringify(inventory);

// Make 2 functions
// Each function receives the inventory as a JSON string and should output an array of items in the same format
// If more than one items with the same price, all should be included in the array

// Find the most expensive item(s) in the inventory
const findMaxPrice = data => {
  const parsedData = JSON.parse(data);
  const prices = parsedData.map(e => e.price);
  const max = Math.max(...prices);
  return JSON.stringify(parsedData.filter(e => e.price === max));
};
console.log(findMaxPrice(stringifiedData));

// Find the cheapest item(s) in the inventory
const findMinPrice = data => {
  const parsedData = JSON.parse(data);
  const prices = parsedData.map(e => e.price);
  const min = Math.min(...prices);
  return JSON.stringify(parsedData.filter(e => e.price === min));
};
console.log(findMinPrice(stringifiedData));
