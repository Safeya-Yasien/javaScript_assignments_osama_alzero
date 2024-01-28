const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
let { title: t } = game;
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

let { developer: d } = game;
console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

// ['Oath In Felghana', 'Ark Of Napishtim', 'Origin']
let o = Object.keys(game.releases)[0];
let u = Object.values(game.releases)[0][0];
let j = Object.values(game.releases)[0][1];

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

let a = Object.keys(game.releases)[1];
console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

let u_price = Object.values(game.releases)[1].US;
console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

let j_price = Object.values(game.releases)[1].JAP;
console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

let or = Object.values(game.releases)[2];
console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
