let div = document.querySelector("div");

function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    location.href = "https://google.com";
  }
}

let counter = setInterval(countDown, 1000);
