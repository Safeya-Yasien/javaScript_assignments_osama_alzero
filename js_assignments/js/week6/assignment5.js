/**
 * sure that neddle will be in array
 * three different ways
 * if the neddle exist in array print found
 */

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// first way
// haystack.unshift(needle);
// console.log(haystack);

// second way
// haystack.push(needle);
// console.log(haystack);

// third way
console.log(haystack.splice(0, 0, needle));
console.log(haystack);

// ensure from existing
console.log(haystack.includes(needle));
