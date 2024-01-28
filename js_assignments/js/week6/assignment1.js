let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// length = 4
//to get number 1
// myFriends.length - num

// Method 1
// first solution
console.log(
  myFriends.slice(myFriends.length - num - myFriends.length - num, num)
);

// second solution
// console.log(myFriends.shift(), myFriends.shift(), myFriends.shift()); // ["Ahmed", "Elham", "Osama"];

console.log("**************************************");

// Method 2
console.log(myFriends.slice(-num - myFriends.length - num, num)); // ["Ahmed", "Elham", "Osama"];
