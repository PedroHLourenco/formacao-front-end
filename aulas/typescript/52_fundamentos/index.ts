// aula 732 - tipo number
let x: number = 10;

console.log(x);

x = 16;

console.log(typeof x);

const y: number = 15.344332;

console.log(typeof y);
console.log(y);

console.log(y.toPrecision(3));

// aula 733 - tipo string
const firstName: string = "Pedro";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Lourenço";

fullName = firstName + " " + lastName;

console.log(fullName);
console.log(typeof fullName);

// aula 734 - tipo boolean
let a: boolean = false;

console.log(a);
console.log(typeof a);

a = true;

console.log(a);

// aula 736 - inference e annotation
let ann: string = "Teste";
let inf = "teste";

// inf = 1;
// ann = 1;

// aula 738 - compilação automática
console.log("testando");
