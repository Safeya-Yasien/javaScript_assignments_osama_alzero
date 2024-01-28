let div_container = document.querySelector(".our-element");
delted_paragraph = div_container.nextElementSibling;
delted_paragraph.remove();

let element_before_div = document.createElement("div");
element_before_div.className = "start";
element_before_div.title = "Start Element";
element_before_div.setAttribute("data-value", "Start");
element_before_div.innerHTML = "Start";

let element_after_div = document.createElement("div");
element_after_div.className = "end";
element_after_div.title = "End Element";
element_after_div.setAttribute("data-value", "End");
element_after_div.innerHTML = "End";

div_container.before(element_before_div);
div_container.after(element_after_div);
