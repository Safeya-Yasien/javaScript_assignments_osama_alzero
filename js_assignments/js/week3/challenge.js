/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

//          11  +  20  +  80  -  11
console.log(++a + +b++ + +c++ - +a++); //  100

//          11  + -20 + 80   - -11   + 12
console.log(++a + -b + +c++ - -a++ + +a); //  94

//          79  + 20 +   9 *  20  - 21 * 9 +   8 -   1
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); //  97

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

// console.log(-d * +e); // 2000
console.log(++e * ++g - d + --f + +g); // 173
