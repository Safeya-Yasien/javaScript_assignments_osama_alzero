// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

let startDate = new Date(0);
console.log(startDate);

// set hours to 0
startDate.setHours(0);
console.log(startDate);

// add 10 years
startDate.setFullYear(startDate.getFullYear() + 10);
console.log(startDate);

// add one second
startDate.setSeconds(startDate.getSeconds() + 1);
console.log(startDate);
