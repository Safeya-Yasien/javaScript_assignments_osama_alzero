// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)";
// "Previous Month Is April And Last Day Is 30";

let currentDate = new Date();
console.log(currentDate);

currentDate.setDate(0);
console.log(currentDate);

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(
  `Previous Month Is ${
    monthNames[currentDate.getMonth()]
  } And Last Day Is ${currentDate.getDate()}`
);
