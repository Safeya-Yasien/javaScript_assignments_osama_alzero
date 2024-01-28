let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
let last = setOfNumbers.keys();
last.next();

console.log(last.next().value);
