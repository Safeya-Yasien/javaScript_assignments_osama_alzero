let theName = "Elzero";

console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log(theName.split(""));
console.log(Object.assign([], theName));
console.log([...theName]);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
