// aula 248 - criando funções
function minhaFuncao() {
  console.log("Testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log("Função em Variável");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
  console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa");
funcaoComParametro("outra função");

// aula 249 - retornando valores
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);
console.log(soma(c, d));

// aula 250 - escopo de funções
let y = 10;

testandoEscopo();

function testandoEscopo() {
  let y = 20;

  console.log(`Y dentro da função é: ${y}`);
}

console.log(`Y fora da função é: ${y}`);

testandoEscopo();

// aula 251 - nested scope
let m = 10;

function nestedScope() {
  let m = 20;

  if (true) {
    let m = 30;

    if (true) {
      let m = 40;

      console.log(m);
    }

    console.log(m);
  }

  console.log(m);
}

nestedScope();

console.log(m);

// aula 252 - arrow function
const testeArrow = () => {
  console.log("Esta é uma arrow function");
};

testeArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Par");
    return;
  }

  console.log("Ímpar");
};

parOuImpar(5);
parOuImpar(2);

// aula 253 - mais sobre arrow functions
const raizQuadrada = (x) => {
  return x * x;
};

console.log(raizQuadrada(4));

// forma resumida
const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));
console.log(raizQuadrada(12));

// aula 254 - argumentos opcionais
const multiplication = function (m, n) {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};

console.log(multiplication(5));
console.log(multiplication(2, 4));

const greeting = (name) => {
  if (!name) {
    console.log("Olá!");
    return;
  }

  console.log(`Olá, ${name}!`);
};

greeting();
greeting("Pedro");

// aula 255 - argumento default
const customGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}!`;
};

console.log(customGreeting("Pedro"));
console.log(customGreeting("José", "Bom dia"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("Testando");
repeatText("Agora repete 5 vezes", 5);

// aula 256 - closure
function someFunction() {
  let txt = "Alguma coisa";

  function display() {
    console.log(txt);
  }

  display();
}

someFunction();

// aula 257 - mais sobre closures
const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

// aula 258 - recursão
const untilTen = (n, m) => {
  if (n < 10) {
    console.log("A função parou de executar");
  } else {
    const x = n - m;

    console.log(x);

    untilTen(x, m);
  }
};

untilTen(100, 7);

// // recursão infinita
// function run() {
//     console.log("Executando...");
//     run();
// }

// run();

function fatorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * fatorial(x - 1);
  }
}

const num = 6;

const result = fatorial(num);

console.log(`O fatorial do número ${num} é ${result}`);
