let number_of_elements = document.querySelector("[type = 'number']");

let element_text = document.querySelector("[type = 'text']");

let select = document.querySelectorAll("select");

let form = document.querySelector("form");
form.style.width = "200px";
form.style.margin = "50px auto";

let inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].style.display = "block";
  inputs[i].style.margin = "0 auto 20px";
  inputs[i].style.padding = "5px 10px";
  inputs[i].style.outline = "none";
  inputs[i].style.borderRadius = "5px";
  inputs[i].style.textAlign = "center";
  inputs[i].style.width = "100%";
}

for (let i = 0; i < select.length; i++) {
  select[i].style.padding = "5px 10px";
  select[i].style.display = "block";
  select[i].style.margin = "0 auto 20px";
  select[i].style.outline = "none";
  select[i].style.borderRadius = "5px";
  select[i].style.textAlign = "center";
  select[i].style.width = "223px";
}

let submit = form.querySelector("[type = 'submit']");
submit.style.width = "223px";
submit.style.backgroundColor = "#5D3587";
submit.style.color = "#fff";
submit.style.fontWeight = "bold";
submit.style.borderRadius = "5px";

let prevent_submit = (event) => {
  event.preventDefault();

  document.querySelectorAll(".box").forEach((box) => box.remove());

  for (let i = 0; i < number_of_elements.value; i++) {
    let divs = document.createElement(`${select.value}`);
    let input_text = document.createTextNode(`${element_text.value}`);
    divs.appendChild(input_text);
    divs.setAttribute("class", "box");
    divs.setAttribute("title", "Element");
    divs.setAttribute("id", `id-${i}`);
    document.body.appendChild(divs);

    divs.style.display = "block";
    divs.style.margin = "0 auto 20px";
    divs.style.backgroundColor = "#aaa";
    divs.style.width = "223px";
    divs.style.padding = "10px";
    divs.style.textAlign = "center";
  }
};
form.addEventListener("submit", prevent_submit);
