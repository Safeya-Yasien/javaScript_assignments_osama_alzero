/**
 * you can't use numbers except 0
 */

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = arr1
  .concat(arr2)
  .sort()
  .join("")
  .toLocaleLowerCase()
  .slice(arr2.length);
console.log(allArrs); // fxy
