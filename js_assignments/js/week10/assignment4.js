let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let output = numsAndStrings
  .filter((ele) => (!isNaN(ele) ? ele : ""))
  .map((ele) => ele * -1);

console.log(output);

// [-1, -10, 10, 20, -5, -3]
