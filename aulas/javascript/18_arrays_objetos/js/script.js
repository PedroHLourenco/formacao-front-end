// aula 262 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = ["texto", 22, false, [], 23.98];

console.log(itens);

// mais sobre arrays
const arr = ["a", "b", "c", "d", "d"];

console.log(arr[0]);
console.log(arr[3]);
console.log(arr[10]);

// aula 263 - propriedades
const numbers = [3, 4, 5];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Pedro";

console.log(myName.length);

// aula 264 - métodos
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// aula 265 - objects
const person = {
  name: "Pedro",
  age: 21,
  job: "Programador",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// aula 266 - criando e removendo propriedades
const car = {
  engine: 2.0,
  brand: "VW",
  model: "Tiguan",
  km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// aula 268 - mais sobre objetos
const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

// aula 269 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// aula 270 - mutability
const a = {
  name: "Pedro",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// aula 271 - loops em arrays
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuário: ${users[i]}`);
}

// aula 272 - métodos de array - push e pop
const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("a", "x", "y", "z");

console.log(array);

// aula 273 - métodos de array - shift e unshift
const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");
letters.unshift("z");

console.log(letters);

// aula 274 - métodos de array - indexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pera", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// aula 275 - métodos de array - slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

// aula 276 - métodos de array - forEach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
  console.log(`O número é ${numero}`);
});

const posts = [
  { title: "Primeiro Post", category: "PHP" },
  { title: "Segundo Post", category: "JS" },
  { title: "Terceiro Post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post ${post.title}, da categoria: ${post.category}`);
});

// aula 277 - métodos de array - includes
const brands = ["BMW", "Fiat", "Porsche"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("Ferrari"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW");
}

// aula 278 - métodos de array - reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// aula 280 - métodos de String - trim
const trimTest = "      Testando    \n  ";

console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// aula 281 - métodos de String - padStart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);

// aula 282 - métodos de String - split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// aula 283 - métodos de String - join
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`;

console.log(fraseDeCompra);

// aula 284 - métodos de String - repeat
const palavra = "Testando ";

console.log(palavra.repeat(5));

// aula 285 - Rest Operator
const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 42, 7, 727, 4, 528));

// aula 286 - estrutura de repetição for...of
const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinita2(1, 2, 5));
console.log(somaInfinita2(50, 265, 8457, 6, 4));

// aula 287 - destructuring objects
const userDetails = {
  firstName: "Pedro",
  lastName: "Lourenço",
  job: "Programador",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// renomear variáveis
const { firstName: primeiroNome } = userDetails;
console.log(firstName);

// aula 288 - destructuring arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// aula 289 - JSON
const myJSON =
  '{"name": "Pedro", "age": 21, "skills": ["PHP", "Javascript", "Python"]}';

console.log(typeof myJSON);

// aula 290 - conversão de JSON
const myObject = JSON.parse(myJSON); // JSON para objeto

console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

// JSON inválido
// const badJSON = '{"name": Pedro, "age": 21}'

// const myBadObject = JSON.parse(badJSON);

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJSON = JSON.stringify(myObject) // objeto para JSON

console.log(myNewJSON);

console.log(typeof myNewJSON);