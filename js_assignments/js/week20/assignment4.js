// // Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)";
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)";
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)";

// first way
let myBirthDate = new Date("2004-02-05");
myBirthDate.setHours(0);
console.log(myBirthDate);

// second way
let myBirthDate2 = new Date(2004, 1, 5);
console.log(myBirthDate2);

// third way
let myBirthDate3 = new Date("February 5, 2004");
console.log(myBirthDate3);

let myBirthDate4 = new Date(Date.parse("Feb 5 2004"));
console.log(myBirthDate4);
