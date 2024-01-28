let myImg = document.images;
let myImgLength = document.images.length;

for (let i = 0; i < myImgLength; i++) {
  if (myImg[i].hasAttribute("alt")) {
    myImg[i].setAttribute("alt", "Elzero New");
  } else {
    myImg[i].alt = "Old";
  }
}

for (let i = 0; i < myImgLength; i++) {
  console.log(myImg[i]);
}
