let myImg = document.images;

for (let i = 0; i < 10; i++) {
  myImg[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  console.log(myImg[i].src);
  myImg[i].alt = "Elzero Logo";
  console.log(myImg[i].alt);
}
