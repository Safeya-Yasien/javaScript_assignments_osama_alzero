let a = 21;
let b = 20;

console.log("Write Your Code Here"); // _21_2021_2021_2021_20_

// with repeating variable
// console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);

// using repeat function
/**
 * _
 * b => 20
 * _
 * a =>21
 * repeat again
 * b => 20
 * _
 */
console.log("_" + `${b}_${a}`.repeat(4) + "_");
