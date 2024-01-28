let myArticles = new XMLHttpRequest();
myArticles.open("GET", "articles.json");
myArticles.send();
console.log(myArticles);

myArticles.onreadystatechange = () => {
  if (myArticles.readyState === 4 && myArticles.status === 200) {
    console.log(JSON.parse(myArticles.responseText));
    console.log("Data Loaded");
  }
};
