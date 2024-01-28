let class_to_add = document.querySelector(".classes-to-add");
let class_to_remove = document.querySelector(".classes-to-remove");

class_to_add.addEventListener("blur", function (event) {
  let classes = event.target.value.toLowerCase().split(" ");
  classes.foreach((el) => curr.claassList.add(el));
  console.log(classes);
});
