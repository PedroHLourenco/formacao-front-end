// aula 313 - strict mode
"use strict";

// opa = "teste";

const opa = "teste";

// const undefined = 10;

// delete [].length;

// aula 314 - depurando com console.log
let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

console.log(a);

for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}

if (a > 5) {
  a = 25;
}

console.log(a);

// aula 315 - debugger
let c = 1;
let d = 2;

if (c == 1) {
  c = d + 2;
}

//debugger;

for (let i = 0; i < d; i++) {
  c = c + 2;
}

console.log("executou o loop");

//debugger;

if (c > 5) {
  c = 25;
}

// aula 316 - tratamento de dados
function checkNumber(n) {
  const result = Number(n);

  if (Number.isNaN(result)) {
    console.log("Valor incorreto");
    return;
  }

  console.log("Valor correto");
  return result;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");

// aula 317 - exception
let x = 10;

if (x != 11) {
  //   throw new Error("Valor de x não pode ser diferente de 11");
}

// aula 318 - try...catch
try {
  const soma = x + y;
} catch (error) {
  console.log(`Erro: ${error}`);
}

// aula 319 - finally
try {
  const value = checkNumber("1");

  if (!value) {
    throw new Error("Valores inválidos");
  }
} catch (error) {
  console.log(`${error}`);
} finally {
  console.log("O código foi executado");
}

// aula 320 - assertions
function checkArray(arr) {
  if (arr.length === 0) {
    throw new Error("O Array precisa ter elementos");
  } else {
    console.log(`O array tem ${arr.length} elementos`);
  }
}

// checkArray([]);
checkArray([1, 2, 3]);
