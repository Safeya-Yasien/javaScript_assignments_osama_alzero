/**
 * you can't use numbers except 0
 * code only one line
 */

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
// length = 3

// Elzero
// at index 2 index 0
console.log(
  words[words.length - "0".toString().length][0]
    .toUpperCase()
    .slice(words.length - "0".toString().length)
);

// then i need number 2 we can git from length of website also

console.log(words[website.length][0].toUpperCase().slice(website.length)); // ZERO
