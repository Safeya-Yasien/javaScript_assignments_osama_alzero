"use strict";

let dataUrl = "data.json";

async function getData() {
  try {
    let jsonData = await fetch(dataUrl);
    let data = await jsonData.json();
    data.length = 5;
    display(data);
  } catch (error) {
    cathError(error);
  }
}

getData();

function display(data) {
  for (let i = 0; i < data.length; i++) {
    let mainDiv = document.createElement("div");

    let articleTitle = document.createElement("div");
    articleTitle.style.fontWeight = "bold";
    articleTitle.textContent = data[i].title;
    mainDiv.appendChild(articleTitle);

    let articleDescription = document.createElement("p");
    articleDescription.textContent = data[i].description;
    mainDiv.appendChild(articleDescription);

    document.body.appendChild(mainDiv);
  }
}

function cathError(error) {
  console.log(Error(`there is and error here ${error}`));
}
