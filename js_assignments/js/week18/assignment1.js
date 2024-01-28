let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// \w: match any char include numbers and underscore
// \w+: match one ore more letters
let ipReg = /[\w:]+/g;

// or
// \d: match any digit
// \d+: match one digit or more
// \D: match any none digit
// \D+: match one or more any none digit
// ()+: match this pattarn one or more
let ipReg2 = /(\d+|\D+)+/g;

console.log(ip.match(ipReg));
console.log(ip.match(ipReg2));
