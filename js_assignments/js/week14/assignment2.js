function Popup() {
  let main_div = document.createElement("div");
  main_div.style.cssText =
    "background-color: #ddd; font-family: sans-serif; width: 400px; height: 200px;position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; display: flex; align-items: center; justify-content: center; flex-direction: column;";

  let header = document.createElement("h1");
  header.innerHTML = "Welcome";
  main_div.appendChild(header);

  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Welcome To Elzero Web School";
  main_div.appendChild(paragraph);

  let close = document.createElement("div");
  close.innerHTML = "X";
  close.style.cssText =
    "background-color: red; width: 25px; height: 25px;border-radius: 50%; color: #fff; display: flex; align-items: center; justify-content: center; position: absolute; top: -10px; right: -10px; cursor: pointer";
  main_div.appendChild(close);

  document.body.appendChild(main_div);
  close.onclick = () => main_div.remove();
}

setTimeout(Popup, 5000);
