let selectOne = document.querySelector(".select-one");
let selectTwo = document.querySelector(".select-two");
let selectThree = document.querySelector(".select-three");

if (window.localStorage.getItem("font-family")) {
  selectOne.value = window.localStorage.getItem("font-family");
}

if (window.localStorage.getItem("color")) {
  selectTwo.value = window.localStorage.getItem("color");
}

if (window.localStorage.getItem("font-size")) {
  selectThree.value = window.localStorage.getItem("font-size");
}

selectOne.addEventListener("change", () => {
  window.localStorage.setItem("font-family", selectOne.value);
});

selectTwo.addEventListener("change", () => {
  window.localStorage.setItem("color", selectTwo.value);
});

selectThree.addEventListener("change", () => {
  window.localStorage.setItem("font-size", selectThree.value);
});
