// names start with Os and end with o
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// \b: means words starts with Os
// \d: match any digit
// \d*: match zero digit or more
// \b: at last match any word ends with o
let reg = /\b(Os)\d*o\b/gi;

console.log(specialNames.match(reg));

// Output
// ['Os10O', 'OsO', 'Os100O']
