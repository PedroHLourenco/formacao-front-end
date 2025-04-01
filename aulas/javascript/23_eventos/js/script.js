// aula 361 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("clicou aqui");
});

// aula 362 - removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// aula 363 - objeto do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// aula 364 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("evento 2");
});

// aula 365 - evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("Não alterou a página");
});

// aula 366 - eventos de tecla
document.addEventListener("keyup", (e) => {
  console.log(`soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
  console.log(`pressionou a tecla ${e.key}`);
});

// aula 367 - eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
  console.log("pressionou o botão");
});

mouseEvents.addEventListener("mouseup", () => {
  console.log("soltou o botão");
});

mouseEvents.addEventListener("dblclick", () => {
  console.log("clicou 2 vezes no botão");
});

// aula 368 - eventos de movimento de mouse
// document.addEventListener("mousemove", (e) => {
//   console.log(`No eixo X: ${e.x}`);
//   console.log(`No eixo Y: ${e.y}`);
// });

// aula 369 - eventos de scroll
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    console.log("Passamos de 200px");
  }
});

// aula 370 - eventos de foco
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log("entrou no input");
});

input.addEventListener("blur", (e) => {
  console.log("saiu do input");
});

// aula 371 - eventos de load
window.addEventListener("load", () => {
  console.log("A página carregou");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "teste";
});

// aula 372 - debounce
const debounce = (f, delay) => {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      f.apply(args);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("executando a cada 400ms");
  }, 400)
);
