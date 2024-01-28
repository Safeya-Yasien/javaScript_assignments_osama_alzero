let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} products</h1>`);

for (let i = 0; i < showCount; i++) {
  // if i write like this will appears in one line
  // document.write(`${products[i]}`);

  // if i write like this the header will be only in div but colors will not be inside div
  //   document.write(`<div><h3>${products[i]}</h3></div>`);

  document.write(`<div>`);
  document.write(`<h3>${products[i]}</h3>`);

  for (let j = 0; j < colors.length; j++) {
    // will be on same line
    // document.write(`${colors[j]}`);
    // every color on line
    // document.write(`<p>${colors[j]}</p>`);
  }
  document.write(colors.join(", "));
  document.write(`</div>`);
}
