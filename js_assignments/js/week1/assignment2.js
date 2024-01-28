// way1
var element = document.getElementById("elzero");

element.style.color = "blue";
element.style.fontSize = "80px";
element.style.fontWeight = "bold";
element.style.textAlign = "center";
element.style.fontFamily = "Arial";

// way 2
document.getElementById("elzero").style.color = "blue";
document.getElementById("elzero").style.fontSize = "80px";
document.getElementById("elzero").style.fontWeight = "bold";
document.getElementById("elzero").style.textAlign = "center";
document.getElementById("elzero").style.fontFamily = "Arial";

// way3
document.getElementById("elzero").style.cssText =
  "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;";
