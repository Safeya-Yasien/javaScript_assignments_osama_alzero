let before = performance.now();

for (let i = 1; i < 100000; i++) {
  console.log(i);
}

let after = performance.now();

console.log(`"Loop Took ${parseInt(after - before)} Milliseconds."`);
