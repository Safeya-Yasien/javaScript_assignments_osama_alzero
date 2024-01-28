/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

let st = "Elzero Web School";

// startsWithe return boolean value so you compare between boolean
// and string using ternery opeartor which compares value and datatype
// console.log(st.slice(7, 10).toLocaleLowerCase().startsWith("w") === "w");

// not dynamic
// if ((st.substr(7, 1).toLocaleLowerCase() === "w"));
// {
//   console.log("Good");
// }

// W Position May Change
if (st.charAt(st.indexOf("Web")).toLocaleLowerCase() === "w");
{
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

console.log("*****************");

if (!(st === "number")) {
  console.log("Good");
}

console.log("*****************");

// let st = "Elzero Web School";
// becaues repeat take only one argument so we can't write split inside it
// and split convert string to array so now we can use first element in array which is index 0
// console.log(st.split(" ", 1)[0].repeat(2));

if (st.split(" ", 1)[0].repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
