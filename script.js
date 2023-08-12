// function changeEven (numbers, value) {
//   // Change code below this line
const newNumbers = [];
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
const value = 10;

numbers.forEach(function (element) {
if (element % 2 === 0) {
newNumbers.push(element + value);
console.log(`element ${element}`);
console.log(newNumbers);}
newNumbers.push(element);
console.log(`element ${element}`);
console.log(newNumbers); }
);
// return newNumbers;
//   // Change code above this line
// }