let myArticles = new XMLHttpRequest();
myArticles.open("GET", "articles.json");
myArticles.send();
console.log(myArticles);

myArticles.onreadystatechange = () => {
  if (myArticles.readyState === 4 && myArticles.status === 200) {
    let mainData = JSON.parse(myArticles.responseText);

    console.log(mainData);

    let mainDiv = document.createElement("div");
    mainDiv.id = "data";
    for (let i = 0; i < mainData.length; i++) {
      let boxDiv = document.createElement("div");
      mainDiv.appendChild(boxDiv);

      let header = document.createElement("h2");
      header.innerHTML = mainData[i].writer;
      boxDiv.appendChild(header);

      let sec = document.createElement("p");
      sec.innerHTML = mainData[i].section;
      boxDiv.appendChild(sec);

      let author = document.createElement("p");
      author.innerHTML = mainData[i].title;
      boxDiv.appendChild(author);

      let cont = document.createElement("p");
      cont.innerHTML = mainData[i].content;
      boxDiv.appendChild(cont);
    }
    document.body.appendChild(mainDiv);
  }
};
