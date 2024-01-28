let myString = "EElllzzzzzzzeroo";

let output = myString
  .split("")
  .filter((ele, ind) => ind === myString.indexOf(ele))
  .reduce((acc, curr) => acc + curr);

console.log(output);
