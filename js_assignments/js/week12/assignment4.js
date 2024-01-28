let div_one = document.querySelector(".one");
let div_two = document.querySelector(".two");

div_one.title = div_two.textContent;
div_two.textContent = `${div_one.textContent} ${div_one.attributes.length}`;
div_one.textContent = div_one.title;

div_one.title = div_two.title;
div_two.title = div_two.className;

console.log(div_one);
console.log(div_two);
