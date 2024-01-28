/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "Salma",
];

document.write(`<div>We Have X Admins</div>`);

document.write(
  `<div>We Have ${
    myAdmins.length - (myAdmins.length - myAdmins.indexOf("Stop"))
  } Admins</div>`
);

document.write(`<hr>`);

// The Admin For Team X Is myAdmins[i]

for (let i = 0; i < myAdmins.length; i++) {
  document.write(`<h3>The Admin For Team ${i + 1} Is ${myAdmins[i]}<br>`);
  document.write(`<h4>Team Members</h4>`);

  for (let j = 0; j < myEmployees.length; j++) {
    // first way
    // if (myAdmins[i].startsWith(myEmployees[j][0]))
    // second way
    if (myAdmins[i].charAt(0) == myEmployees[j].charAt(0)) {
      document.write(`<p>${j + 1}- ${myEmployees[j]}<br>`);
    }
  }
  document.write(`<hr>`);
}
