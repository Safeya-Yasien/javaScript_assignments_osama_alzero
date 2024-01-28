let userName = document.querySelector(".name");

userName.addEventListener("input", () => {
  window.sessionStorage.setItem("name", userName.value);
});

let userAge = document.querySelector(".age");

userAge.addEventListener("input", () => {
  window.sessionStorage.setItem("age", userAge.value);
});

let userPassword = document.querySelector(".password");

userPassword.addEventListener("input", () => {
  window.sessionStorage.setItem("password", userPassword.value);
});

let userColor = document.querySelector(".colors");

userColor.addEventListener("change", () => {
  window.sessionStorage.setItem("color", userColor.value);
});

// window.sessionStorage.clear();
