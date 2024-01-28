let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let output = mix
  .map((ele) => (isNaN(ele) ? ele : ""))
  .reduce((acc, curr) => acc + curr);

console.log(output);

// Elzero
