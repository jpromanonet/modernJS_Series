// The old way to declare variables in JS

var life = 100; // Our life bar wich is a NUMBER DATATYPE
life = life - 10; // 90
life = life / 10; // 10

var name = "Jpromanonet"; // This is an STRING DATATYPE

var checkout = true; // A BOOLEAN DATATYPE

var box; // UNDEFINED VARIABLE

var box2 = null; //No value var

console.log(life);
console.log(name);
console.log(checkout);

// The new way to declare variables in JS

// Const for "constant" means a variable can't be changed
// or re-declare either, it's not allowed.
const clife = 100;

// If you want to create the variable and change it, use let, like so
let letLife = 100;

letLife = letLife - 50;

console.log(clife);
console.log(letLife);
