let theNumber = 100020003000;

console.log(Number([...new Set(theNumber.toString())].sort().join("")));
// Needed Output
// 123
