// upper to lower and vice verse

let start = 0;
let swappedName = "elZerO";

// Output
("ELzERo");

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] == swappedName[i].toLocaleLowerCase()) {
    document.write(`${swappedName[i].toUpperCase()}`);
  } else {
    document.write(`${swappedName[i].toLocaleLowerCase()}`);
  }
}
