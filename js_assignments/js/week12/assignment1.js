/* <div id="elzero" class="element" name="js">JavaScript</div> */

let mydiv = document.querySelector(".element");

console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("div"));
console.log(document.querySelector("[name = 'js']"));
console.log("*******************************************");

console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll("[name = 'js']")[0]);
console.log("*******************************************");

console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByTagName("div")[0]);
console.log("*******************************************");

console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.firstElementChild);
console.log(document.getElementsByName("js")[0]);
