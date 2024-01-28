let myArray = ["E", "l", "z", ["e", "r"], "o"];

let output = myArray
  .reduce((acc, curr) => acc + curr)
  .split(",")
  .join("");

console.log(output);

// Elzero
