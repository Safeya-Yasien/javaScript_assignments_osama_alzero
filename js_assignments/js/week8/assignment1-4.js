function checkStatus(a, b, c) {
  // Your Code Here
  let str, num, bool;
  if (typeof a === "string") {
    str = a;
    if (typeof b === "number") {
      num = b;
      bool = c;
    } else {
      num = c;
      bool = b;
    }
  }
  if (typeof a === "number") {
    num = a;
    if (typeof b === "string") {
      str = b;
      bool = c;
    } else {
      str = c;
      bool = b;
    }
  }
  if (typeof a === "boolean") {
    bool = a;
    if (typeof b === "string") {
      str = b;
      num = c;
    } else {
      str = c;
      num = b;
    }
  }

  return `Hello ${str}, Your Age Is ${num}, ${
    bool ? " You Are Available" : "You Are Not Available"
  }`;
}

// Needed Output
console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
