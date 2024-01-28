/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// let n2Join = new Set(n2.join(""));
// let res = Array.from(n2Join);

// let final = new Set(
//   res
//     .sort()
//     .copyWithin(res.length - 1)
//     .sort()
//     .reverse()
// );
// console.log(Number(Array.from(final).join(""))); // 210

console.log(
  Number(
    Array.from(
      new Set(
        Array.from(new Set(n2.join("")))
          .sort()
          .copyWithin(Array.from(new Set(n2.join(""))).length - 1)
          .sort()
          .reverse()
      )
    ).join("")
  )
);

console.log([...n1, ...n2].length * Math.max(...n1));
