"use strict";
// aula 741 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"
const nomes = ["Pedro", "João"];
// nomes.push(4);
// aula 742 - outra sintaxe de arrays
const nums = [100, 200];
nums.push(300);
console.log(nums);
// nums.push("teste");
console.log(nums[0]);
// aula 743 - any
const arr1 = [1, "teste", true, [], { nome: "Pedro" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// aula 744 - tipo de parâmetros
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("a", "b");
// aula 745 - tipo de retorno
function greeting(name) {
    return `Olá, ${name}!`;
}
console.log(greeting("Pedro"));
// aula 746 - funções anônimas
setTimeout(function () {
    const salary = 1000;
    // console.log(parseFloat(salary));
    // console.log(salary);
}, 2000);
// aula 747 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
const pessoa = {
    nome: "Pedro",
    sobrenome: "Lourenço",
};
// aula 748 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(6);
// aula 749 - validação de props opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Pedro", "Lourenço"));
console.log(advancedGreeting("Pedro"));
// aula 750 - union type
function showBalance(balance) {
    console.log(`o saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500,00");
// showBalance(true);
const arr2 = [1, "teste", false];
// aula 751 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
showId(123);
function showCoords(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 20,
    z: 30,
};
showCoords(coordObj);
const somePerson = { name: "Pedro", age: 21 };
console.log(somePerson);
// type personType {
//     age: number;
// }
// aula 755 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
// showDirection("top");
// aula 756 - non-null assertion operator
const p = document.getElementById("some-p");
console.log(p.innerText);
// aula 757 - bigint
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// aula 758 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
