// don't print numbers or names startsWith 'A'
// you must use while loop

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// // Output
// ("1 => Sayed");
// ("2 => Mahmoud");

while (index < friends.length) {
  if (
    typeof friends[index] !== typeof index &&
    !friends[index].startsWith("A")
  ) {
    console.log(`${index.toString().length} => ${friends[index]}`);
    counter++;
  }
  index++;
}
