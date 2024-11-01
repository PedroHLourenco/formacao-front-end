// aula 324 - função setTimeout
console.log("Ainda não executou");

setTimeout(function () {
  console.log("Requisição Assíncrona");
}, 2000);

console.log("Ainda não executou 2");

// aula 325 - função setInterval
console.log("Ainda não começou");

setInterval(function () {
  console.log("Intervalo Assíncrono");
}, 3000);

console.log("Ainda não começou 2");

// aula 326 - promises
const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })
  .then((value) => value - 1)
  .then((value) => console.log(`Agora é ${value}`));

console.log("outro código");

// aula 327 - tratamento de erros em promises - catch
Promise.resolve(4 * "djd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores Inválidos");
    }
  })
  .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// aula 328 - rejeitando promises - reject
function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O número é maior que 10`);
    } else {
      reject(new Error("Número muito baixo"));
    }
  });
}

const a = checkNumber(20);
const b = checkNumber(10);

console.log(a, b);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

// aula 329 - resolvendo várias promises - all
const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10);
  }, 3000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
      } else {
        reject("Erro");
      }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// aula 330 - async functions
async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2, 4).then((value) => {
  console.log(`O valor da soma é: ${value}`);
});

console.log("teste async");

// aula 331 - assertions
function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu a promise");
    }, 2000);
  });
}

async function chamadaAsync() {
  console.log("Chamando a promise, esperando o resultado");

  const result = await resolveComDelay();

  console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// aula 332 - generators
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
