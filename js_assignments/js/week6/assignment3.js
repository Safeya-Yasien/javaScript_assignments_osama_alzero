/**
 * you can't use numbers
 * code only one line
 */

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
// finalArr.unshift(arrTwo.pop()) +
//   finalArr.unshift(arrOne.pop()) +
//   arrOne.reverse().concat(arrTwo.reverse());

finalArr = arrTwo.concat(arrOne).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
