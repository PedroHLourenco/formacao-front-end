// aula 342 - DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// aula 344 - getElementByTagName
const listItems = document.getElementsByTagName("li");

console.log(listItems);

// aula 345 - getElementById
const titulo = document.getElementById("title");

console.log(titulo);

// aula 346 - getElementByClassName
const produtos = document.getElementsByClassName("product");

console.log(produtos);

// aula 347 - querySelector e querySelectorAll
const produtosQuery = document.querySelectorAll(".product");

console.log(produtosQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// aula 349 - insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// aula 350 - appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// aula 351 - replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu novo título!";

header.replaceChild(h2, title);

// aula 352 - createTextNode
const myText = document.createTextNode("Mais um título");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// aula 353 - alterando atributos
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

// aula 354 - altura e largura de elementos
const footer = document.querySelector("footer");

console.log(footer.offsetHeight);
console.log(footer.offsetWidth);

console.log(footer.clientHeight);
console.log(footer.clientWidth);

// aula 355 - posição do elemento
const product1 = produtos[0];

console.log(product1.getBoundingClientRect());

// aula 356 - alterando estilos de elementos
mainContainer.style.color = "red";

mainContainer.style.backgroundColor = "#333";

mainContainer.style.paddingBottom = "15px";

// aula 357 - estilos do HTMLCollection
for (const li of listItems) {
  li.style.backgroundColor = "red";
}
