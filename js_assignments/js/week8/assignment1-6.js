function multiply(...numbers) {
  let res = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") continue;
    res *= parseInt(numbers[i]);
  }
  return res;
}

console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
