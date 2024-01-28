let div = document.querySelector("div");

function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "5") {
    window.open(
      "https://elzero.org",
      "Elzero",
      "width = 400, height = 400, top = 200, left = 600"
    );
  }
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countDown, 1000);
