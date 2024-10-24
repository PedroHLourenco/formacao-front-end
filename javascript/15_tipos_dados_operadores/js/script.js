// aula 205 - tipo Number
console.log(typeof 2);
console.log(typeof -532);
console.log(typeof 25.69);

// aula 206 - operações aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 8);
console.log(8 / 4);
console.log(8 % 5);

console.log((5 + (4 - 2) * 8) / 3);

// aula 207 - special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

console.log(12 * "a");

// aula 208 - tipo String
console.log("Um texto");
console.log("outro texto");
console.log(`mais um texto`);

console.log(typeof "Um texto");
console.log(typeof "outro texto");
console.log(typeof `mais um texto`);

// aula 209 - caracteres especiais
console.log("Testando a \nquebra de linha");

console.log("Espaçamento \t com tab");

// aula 210 - concatenação
console.log("Oi, " + "tudo " + "bem?");
console.log(`Oi, ` + `tudo ` + `bem?`);

// aula 211 - interpolação - template string
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui: ${console.log("teste")}`);

// aula 212 - tipo boolean
console.log(true);
console.log(false);

console.log(5 < 20);
console.log(10 > 30);

console.log(typeof true);

// aula 213 - comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);
console.log(10 == 9);

console.log(10 != 9);

// aula 214 - valor idêntico
console.log(10 == "10");

console.log(10 === "10");

console.log(10 != "10");

console.log(10 !== "10");

// aula 217 - operadores lógicos
console.log(true && true);
console.log(true && false);

console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "Pedro" === 10);

console.log(5 > 2 || "Pedro" === 10);
console.log(5 < 2 || "Pedro" === 10);

console.log(!true);
console.log(!5 > 2);

// aula 218 - empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);
console.log(null == undefined);

console.log(null == false);
console.log(undefined == false);

// aula 219 - conversão automática
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);
