/*
  Array Challenge
  don't use any numbers
*/

let zero = 0;

let counter = 3;

// length = 6

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

// first solution
console.log(my.slice(zero, counter + zero.toString().length).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
// second solution not good
// console.log(my.pop(), my.pop(), my.reverse());

console.log("(***************************)");

console.log(my.slice(zero + zero.toString().length, counter).reverse()); // ["Elham", "Mazero"]

console.log("(***************************)");

// El at inedx 2
// yy[counter - zero.toString().length] Elham
// index 0 and 1
// slice(zero, counter - zero.toString().length)

// z at index 1
// my[zero.toString().length]
// index 2 to end
// slice(counter - zero.toString().length)

console.log(
  my[counter - zero.toString().length].slice(
    zero,
    counter - zero.toString().length
  ) + my[zero.toString().length].slice(counter - zero.toString().length)
); // "Elzero"

console.log("(***************************)");
console.log(
  my[zero.toString().length][counter + zero.toString().length] +
    my[counter][zero]
); // "rO"
