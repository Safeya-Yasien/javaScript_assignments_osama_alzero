let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

window.onload = () => {
  for (let i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i);
    let value = window.localStorage.getItem(key);

    let taskContainer = document.createElement("div");
    taskContainer.style.cssText =
      " color: #000; width: 100%; height: 35px; border-radius: 5px; display: flex; align-items: center; justify-content: space-between; padding: 0 10px; margin-bottom: 5px; gap: 30px;";
    tasks.appendChild(taskContainer);

    // task
    let created_task = document.createElement("div");
    created_task.style.cssText =
      "background-color: #fff; width: 100%; padding: 7px; border-radius: 4px;";
    created_task.textContent = value;
    taskContainer.appendChild(created_task);

    // delete button
    let deleted_btn = document.createElement("div");
    deleted_btn.style.cssText =
      "background-color: #aa0909; color: #fff; border-radius: 5px; text-align: center; padding: 5px 10px; cursor: pointer";
    deleted_btn.textContent = "Delete";
    taskContainer.appendChild(deleted_btn);

    counter++;

    // delete item
    deleted_btn.addEventListener("click", () => {
      tasks.removeChild(taskContainer);

      window.localStorage.removeItem(key);
    });
  }
};

let counter = 0;

submit.addEventListener("click", (event) => {
  if (input.value === "") {
    event.preventDefault();
  } else {
    console.log(input.value);

    let taskContainer = document.createElement("div");
    taskContainer.style.cssText =
      " color: #000; width: 100%; height: 35px; border-radius: 5px; display: flex; align-items: center; justify-content: space-between; padding: 0 10px; margin-bottom: 5px; gap: 30px;";
    tasks.appendChild(taskContainer);

    // task
    let created_task = document.createElement("div");
    created_task.style.cssText =
      "background-color: #fff; width: 100%; padding: 7px; border-radius: 4px;";
    created_task.textContent = input.value;
    taskContainer.appendChild(created_task);

    // delete button
    let deleted_btn = document.createElement("div");
    deleted_btn.style.cssText =
      "background-color: #aa0909; color: #fff; border-radius: 5px; text-align: center; padding: 5px 10px; cursor: pointer";
    deleted_btn.textContent = "Delete";
    taskContainer.appendChild(deleted_btn);

    counter++;

    let localStorageKey = `Task ${counter}`;
    window.localStorage.setItem(localStorageKey, input.value);

    // delete item
    deleted_btn.addEventListener("click", () => {
      tasks.removeChild(taskContainer);

      window.localStorage.removeItem(localStorageKey);
    });

    input.value = "";
  }
});

// window.localStorage.clear();
