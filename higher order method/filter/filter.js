const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); 

const madulas = [1, 2, 3, 4, 5, 6];
const odd = madulas.filter(n => n % 2 !== 0);
console.log(odd);


const no = [1, 2, 3, 4, 5, 6];
const oddNumbers = no.filter(n => n % 2 !== 0);
console.log(oddNumbers);

const value = [5, 12, 8, 20, 3];
const greaterThanTen = value.filter(n => n > 10);
console.log(greaterThanTen); 

const people = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 17},
  {name: "Charlie", age: 30}
];
const adults = people.filter(person => person.age >= 18);
console.log(adults); 

const values = [0, 1, false, 2, " ", 3];
const truthyValues = values.filter(Boolean);
console.log(truthyValues); 


const fruits = ["apple", "banana", "cherry", "date"];
const withA = fruits.filter(fruit => fruit.includes("a"));
console.log(withA); 


const find = [3, -1, -7, 4, 0];
const negativeNumbers = find.filter(n => n < 0);
console.log(negativeNumbers); 


const num = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = num.filter((value, index, arr) => arr.indexOf(value) === index);
console.log(uniqueNumbers); 


const arrays = [[1,2], [3,4,5], [6]];
const bigArrays = arrays.filter(arr => arr.length > 2);
console.log(bigArrays); 







