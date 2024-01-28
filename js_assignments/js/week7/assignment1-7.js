// print from number 2 to the end
// print only numbers

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
// 2;
// 3;
// 4;

for (let i = start + start.toString().length; i < mix.length; i++) {
  if (typeof mix[i] == "string") continue;
  else {
    console.log(mix[i]);
  }
}

or;
// for (let i = mix[start]; i < mix.length; i++)
