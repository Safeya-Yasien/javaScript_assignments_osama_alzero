// body
document.body.style.cssText =
  "margin: 0; padding: 0; border-box: box-sizing; font-family: sans-serif";

// bais container
let pageContainer = document.createElement("div");
pageContainer.className = "container";
pageContainer.style.cssText =
  "display: flex; justify-content: space-between; align-items: center; margin: 0 auto; padding: 0 15px;";

// header
let pageHeader = document.createElement("header");
pageHeader.className = "my_header";

// container
let headerContainer = pageContainer.cloneNode(true);
headerContainer.style.cssText += "min-height: 70px";
pageHeader.appendChild(headerContainer);

// logo
let logo = document.createElement("h1", "Elzero");
logo.innerHTML = "Elzero";
logo.style.cssText = "color: #23a96e; margin: 0;";
headerContainer.appendChild(logo);

// links
let list_ul = document.createElement("ul");
let links_name = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < 4; i++) {
  let list_li = document.createElement("li");
  list_li.innerHTML = `<a href='#'>${links_name[i]}</a>`;
  list_ul.appendChild(list_li);
}
list_ul.style.cssText = "display: flex; list-style: none; ";

// a style
let list_li_a = list_ul.querySelectorAll("a");
for (let i = 0; i < list_li_a.length; i++) {
  list_li_a[i].style.cssText =
    "text-decoration: none; display: flex; align-items: center; padding: 5px 10px; color: #000";
}
headerContainer.appendChild(list_ul);
document.body.appendChild(pageHeader);

// main
let page_main = document.createElement("main");
let page_main_container = pageContainer.cloneNode(true);
page_main_container.style.cssText +=
  "background-color: #ebebeb; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 10px";

// products
for (let i = 1; i <= 15; i++) {
  let box = document.createElement("div");
  box.className = `box box-${i}`;
  box.style.cssText =
    "background-color: #fff; text-align: center; padding: 20px";

  let product_number = document.createElement("span");
  product_number.style.cssText =
    "font-weight: bold; color: #000; display: block; margin-bottom: 5px; font-size: 20px";
  product_number.innerHTML = `${i}`;
  box.appendChild(product_number);
  //   span
  let box_span = document.createElement("span");
  let box_text = document.createTextNode("Product");
  box_span.style.cssText = "color: #aaa; font-size: 14px; display: block";
  box_span.appendChild(box_text);
  box.appendChild(box_span);
  page_main_container.appendChild(box);
}

page_main.appendChild(page_main_container);
document.body.appendChild(page_main);

// footer
let page_footer = document.createElement("footer");
page_footer.style.cssText =
  "background-color: #23a96e; color: #fff; font-weight: bold; padding: 10px; text-align: center";
let footer_text = document.createElement("span");
footer_text.innerHTML = "Copyright 2024";
page_footer.appendChild(footer_text);

document.body.appendChild(page_footer);
