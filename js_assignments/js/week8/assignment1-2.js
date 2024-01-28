function calculate(firstNum, secondNum, operation) {
  // Your Code Here

  if (secondNum === undefined) return `Second Number Is Not Found`;
  switch (operation) {
    case "add":
    case undefined:
      return `${firstNum + secondNum}`;
      break;
    case "subtract":
      return `${firstNum - secondNum}`;
      break;
    case "multiply":
      return `${firstNum * secondNum}`;
      break;
    // default:
    //   console.log("not valid operation");
  }
}

// Needed Output
console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600
