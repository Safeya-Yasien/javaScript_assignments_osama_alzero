/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
  let str, num, bool;
  typeof a === "string"
    ? (str = a)
    : typeof b === "string"
    ? (str = b)
    : (str = c);

  typeof a === "number"
    ? (num = a)
    : typeof b === "number"
    ? (num = b)
    : (num = c);

  typeof a === "boolean"
    ? (bool = a)
    : typeof b === "boolean"
    ? (bool = b)
    : (bool = c);

  bool == "true"
    ? console.log(
        `Hello ${str}, Your Age Is ${num}, You Are Available For Hire`
      )
    : console.log(
        `Hello ${str}, Your Age Is ${num}, You Are Not Available For Hire`
      );
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
