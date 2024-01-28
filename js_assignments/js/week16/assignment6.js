let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

if (chosen === 1) {
  // If chosen === 1
  let {
    title,
    age,
    available,
    skills: [, CSS],
  } = myFriends[0];
  let avaliablity = available ? "Available" : "Not Avaliable";
  console.log(title, age, available, CSS);
} else if (chosen === 2) {
  // If chosen === 2
  let {
    title,
    age,
    available,
    skills: [, Django],
  } = myFriends[1];
  let avaliablity = available ? "Available" : "Not Avaliable";
  console.log(title, age, available, Django);
} else if (chosen === 3) {
  // If chosen === 3
  let {
    title,
    age,
    available,
    skills: [, Laravel],
  } = myFriends[2];
  let avaliablity = available ? "Available" : "Not Avaliable";
  console.log(title, age, available, Laravel);
}
