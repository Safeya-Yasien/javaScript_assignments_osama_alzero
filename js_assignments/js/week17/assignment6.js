// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let numbers = chars.filter((e) => typeof e === "number");

let firsChars = chars
  .filter((e) => typeof e === "string")
  .slice(0, numbers.length);

// this for two other cases
console.log(
  chars.sort().copyWithin(0, numbers.length, numbers.length + firsChars.length)
);
