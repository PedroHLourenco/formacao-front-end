// aula 406 - var, let e const
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

function logName() {
  const name = "pedro";
  console.log(name);
}

const name = "matheus";

logName();

console.log(name);

// aula 407 - arrow function
const sum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return `Olá, ${name}!`;
  } else {
    return "Olá";
  }
};

console.log(greeting("Pedro"));
console.log(greeting());

const user = {
  name: "Theo",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 1000);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 2000);
  },
};

// user.sayUserName();
// user.sayUserNameArrow();

// aula 408 - filter
const arr = [1, 2, 3, 4, 5, 6];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "Matheus", available: true },
  { name: "João", available: false },
  { name: "Pedro", available: true },
  { name: "Maria", available: false },
  { name: "Jorge", available: false },
  { name: "Ana", available: true },
  { name: "Gabriel", available: true },
];

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

// aula 409 - map
const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Calça", price: 50.99, category: "Roupas" },
  { name: "Mouse", price: 100.5, category: "Eletrônicos" },
  { name: "Caderno", price: 20.0, category: "Papelaria" },
  { name: "Celular", price: 1500.9, category: "Eletrônicos" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

// aula 410 - template literals
const userName = "Pedro";
const age = 21;

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos`);

// aula 411 - desctructuring
const fruits = ["maçã", "mamão", "laranja"];

const [f1, f2, f3] = fruits;

console.log(f1, f3);

const productDetails = {
  name: "Mouse",
  price: 100.5,
  category: "Eletrônicos",
  color: "Cinza",
};

const { name: productName, price, category, color } = productDetails;

console.log(
  `O nome do produto é ${productName}, ele custa R$${price}, é da categoria ${category} e é da cor ${color}`
);

// aula 412 - spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a3, 7];

console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "vw" };
const otherInfos = { km: 100000, price: 499999 };

const car = { ...carName, ...carBrand, ...otherInfos };

console.log(car);

// aula 413 - classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa gola V", 20);

console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

// aula 414 - herança
class productWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new productWithAttributes("Chapéu", 29.99, [
  "Azul",
  "Vermelho",
  "Preto",
]);

console.log(hat);
console.log(hat.name);

hat.showColors();
