let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.charAt(2).toUpperCase().includes("Z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True

console.log(word.toUpperCase().includes(letterZ.toUpperCase()));
console.log(word.startsWith(letterE.toUpperCase()));
console.log(word.endsWith(letterO.toLowerCase()));
