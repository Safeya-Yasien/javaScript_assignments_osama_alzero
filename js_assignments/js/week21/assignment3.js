let myArticles = new XMLHttpRequest();
myArticles.open("GET", "articles.json");
myArticles.send();
console.log(myArticles);

myArticles.onreadystatechange = () => {
  if (myArticles.readyState === 4 && myArticles.status === 200) {
    let mainData = JSON.parse(myArticles.responseText);
    console.log(mainData);
    console.log("Data Loaded");

    for (let i = 0; i < mainData.length; i++) {
      mainData[i].section = "All";
    }

    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};
