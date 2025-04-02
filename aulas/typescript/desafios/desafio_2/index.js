"use strict";
// Crie uma variável que recebe um número; Converta este número para string em uma nova variável; Esta variável de conversão deve estar tipada por inferência; Imprima este número em uma string maior, utilizando o recurso de template strings ou concatenação;
let num = 5;
let numStr = String(num);
console.log(`O número ${numStr} é maior que 0? ${num > 0}`);
