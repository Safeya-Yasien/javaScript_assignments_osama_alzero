let input_field = document.querySelector("input");
let dollar = document.forms[0].getElementsByClassName("result")[0];
console.log(dollar);
console.log(input_field);

// second method
input_field.addEventListener("input", () => {
  dollar.innerHTML = `${input_field.value} USD Dollar = ${(
    input_field.value * 15.6
  ).toFixed(2)} Egyptian Pound`;
});

// first method
input_field.onkeyup = () => {
  dollar.innerHTML = `${input_field.value} USD Dollar = ${(
    input_field.value * 15.6
  ).toFixed(2)} Egyptian Pound`;
};
