export function addElement(element) {
  document.getElementById("app").append(element);
}

export function addBigTitle(text, id) {
  var newH1 = document.createElement("h1");
  newH1.setAttribute("id", id);
  newH1.appendChild(document.createTextNode(text));
  addElement(newH1);
}

export function addImage(imageLink, id) {
  var newImage = document.createElement("img");
  newImage.setAttribute("id", id);
  newImage.setAttribute("src", imageLink);
  addElement(newImage);
}
