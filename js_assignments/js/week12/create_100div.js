for (let i = 0; i < 100; i++) {
  let my_div = document.createElement("div");
  my_div.className = `product${i}`;

  let my_header = document.createElement("h3");
  let my_text = document.createTextNode("testing header");
  my_header.appendChild(my_text);

  let my_paragraph = document.createElement("p");
  let my_paragraph_text = document.createTextNode("testing paragraph");
  my_paragraph.appendChild(my_paragraph_text);

  my_div.appendChild(my_header);
  my_div.appendChild(my_paragraph);

  document.body.appendChild(my_div);
}
