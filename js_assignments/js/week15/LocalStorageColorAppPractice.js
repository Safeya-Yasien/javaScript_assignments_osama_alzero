let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // set background color to div
  exp.style.backgroundColor = window.localStorage.getItem("color");

  //   the default active will be on it so we have to delte it
  lis.forEach((item) => {
    item.classList.remove("active");
  });

  //   get element which have color put active class on it
  document
    .querySelector(`[data-color = ${window.localStorage.getItem("color")}]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (event) => {
    // remove active class
    lis.forEach((item) => {
      item.classList.remove("active");
    });

    // add active class
    li.classList.add("active");

    // add color to experiment div
    exp.style.backgroundColor = li.getAttribute("data-color");

    // add color to local storage
    window.localStorage.setItem("color", li.getAttribute("data-color"));
  });
});
