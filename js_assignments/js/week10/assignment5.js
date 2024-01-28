let nums = [2, 12, 11, 5, 10, 1, 99];

let output = nums.reduce(
  (acc, curr) => (curr % 2 != 0 ? acc + curr : acc * curr),
  1
);

console.log(output);

// 500
