// aula 222 - variáveis
let nome = "Pedro";

console.log(nome);
console.log("Pedro");

nome = "Pedro Lourenço";
console.log(nome);

const idade = 31;
console.log(idade);

//idade = 32;

console.log(typeof nome);
console.log(typeof idade);

// aula 223 - mais sobre variáveis
//let 2teste = "inválido"
//let @teste = "inválido"

let a = 10,
  b = 20,
  c = 30;

console.log(a, b, c);

const nomecompleto = "Pedro Lourenço";
const nomeCompleto = "João Silva";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";

console.log(_teste);
console.log($teste);

// aula 227 - função prompt
//const age = prompt("Informe sua idade:");

//console.log(`Você tem ${age} anos`);

// aula 228 - função alert
// alert("Testando");

// const z = 10;
// alert(`O número é ${z}`);

// aula 229 - objeto Math
console.log(Math.max(4, 6, 10, 3, 8));

console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

// aula 230 - obseto Console
console.log("Teste!");
console.error("erro!");
console.warn("atenção!");

// aula 232 - estrutura condicional if
const m = 10;

if (m > 5) {
  console.log("M é maior que 5");
}

const user = "João";

if (user === "João") {
  console.log("Olá, João");
}

if (user === "Maria") {
  console.log("Olá, Maria");
}

console.log(user === "João", user === "Maria");

// aula 233 - estrutura condicional else
const loggedIn = false;

if (loggedIn) {
  console.log("Está autenticado");
} else {
  console.log("Não está autenticado");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
  console.log("Números altos");
} else {
  console.log("Números baixos");
}

// aula 234 - estrutura condicional else if
if (1 > 2) {
  console.log("Teste");
} else if (2 > 3) {
  console.log("Teste 2");
} else if (5 > 1) {
  console.log("Agora sim");
}

const userName = "Pedro";
const userAge = 21;

if (userName === "José") {
  console.log("Bem vindo, José");
} else if (userName === "Pedro" && userAge === 21) {
  console.log("Bem vindo, Pedro, você tem 21 anos");
} else {
  console.log("Nenhuma condição aceita");
}

// aula 236 - laço de repetição while
let p = 0;

while (p < 5) {
  console.log(`Repetindo ${p}`);
  p += 1;
}

// loop infinito
// let x = 10;

// while (x > 5) {
//   console.log(`Repetindo ${x}`);
// }

// aula 237 - laço de repetição do while
let o = 10;

do {
  console.log(`Valor de o: ${o}`);
  o--;
} while (o > 1);

// aula 238 - laço de repetição for
for (let t = 0; t < 10; t++) {
  console.log(t);
}

let r = 10;

for (r; r > 0; r -= 1) {
  console.log(`r está diminuindo: ${r}`);
}

// aula 239 - indentação
for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10! ${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("deu 0");
    }
  }
}

// aula 240 - break
for (let g = 20; g > 10; g--) {
  console.log(`O valor de g é: ${g}`);

  if (g === 15) {
    console.log("g é 15!");
    break;
  }
}

// aula 241 - continue
for (let s = 1; s < 10; s++) {
  // operador resto - %
  if (s % 2 === 0) {
    console.log("Número par!");
    continue;
  }

  console.log(s);
}

// aula 242 - estrutura condicional switch
const job = "Advogado";

switch (job) {
  case "Programador":
    console.log("Você é um programador");
    break;

  case "Advogado":
    console.log("Você é um advogado");
    break;

  case "Médico":
    console.log("Você é um médico");
    break;

  default:
    console.log("Profissão não encontrada");
    break;
}

// switch errado
const l = 100;

switch (l) {
  case 200:
    console.log("l é 200");

  case 100:
    console.log("l é 100");

  case 10:
    console.log("l é 10");

  default:
    console.log("l não foi encontrado");
}
