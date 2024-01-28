let start = 1;
let end = 6;
let breaker = 2;

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

for (let i = start; i <= end; i++) {
  document.write(`<div>`);
  document.write(`<h3>${i}</h3>`);

  for (let j = breaker; j <= end - breaker; j += breaker) {
    document.write(`<p>-- ${j}</p>`);
  }
  document.write(`</div>`);
}
