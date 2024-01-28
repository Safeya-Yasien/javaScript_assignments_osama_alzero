function getData() {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.send();

    request.onreadystatechange = () => {
      if (request.status === 200 && request.readyState === 4) {
        resolve(JSON.parse(request.responseText));
      } else {
        reject(Error("Failed to fetch data"));
      }
    };
  });
}

getData()
  .then((data) => {
    data.length = 5;
    return data;
  })
  .then((res) => {
    for (let i = 0; i < res.length; i++) {
      let mainDiv = document.createElement("div");

      let articleTitle = document.createElement("div");
      articleTitle.style.fontWeight = "bold";
      articleTitle.textContent = res[i].title;
      mainDiv.appendChild(articleTitle);

      let articleDescription = document.createElement("p");
      articleDescription.textContent = res[i].description;
      mainDiv.appendChild(articleDescription);

      document.body.appendChild(mainDiv);
    }
  })
  .catch((error) => {
    console.log(`${error}`);
  });
