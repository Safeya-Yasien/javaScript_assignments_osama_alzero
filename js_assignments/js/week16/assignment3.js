let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let arrays = arr3.concat(arr2, arr1);
console.log(arrays);
// ['Haytham', 'Shady', 'Mahmoud', 'Mohamed', 'Gamal', 'Amir', 'Ahmed', 'Sameh', 'Sayed']
// Write Your Destructuring Assignment Here
let [, a, b, , , , c] = arrays;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
