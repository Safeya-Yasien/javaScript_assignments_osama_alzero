// function itsMe() {
//     return `Iam A Normal Function`;
//   }

//   console.log(itsMe()); // Iam A Normal Function

itsMe = (_) => `Iam A Normal Function`;
console.log(itsMe());

// second function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
