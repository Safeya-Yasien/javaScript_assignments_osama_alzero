let myBirthDate = new Date("2004-02-05");
console.log(myBirthDate);

let currentDate = new Date();
console.log(currentDate);

let millSeconds = currentDate - myBirthDate;
let seconds = parseInt(millSeconds / 1000);
let minutes = parseInt(seconds / 60);
let hours = parseInt(minutes / 60);
let days = parseInt(hours / 24);
let months = parseInt(days / 30);
let years = parseInt(months / 12);

console.log(`${millSeconds} Milli Seconds`);
console.log(`${seconds} Seconds`);
console.log(`${minutes} Minutes`);
console.log(`${hours} Hours`);
console.log(`${days} Days`);
console.log(`${months} Months`);
console.log(`${years} Years`);
