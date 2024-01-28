let mes = prompt("Print Number From – To", "Example: 5-20");

let splited = mes
  .split("-")
  .map((num) => parseInt(num))
  .sort((a, b) => a - b);

for (let i = splited[0]; i <= splited[1]; i++) {
  let number = document.createElement("p");
  number.textContent = i;
  document.body.appendChild(number);
}
