// =========================================
// JavaScript Variables & Data Types
// =========================================


// -----------------------------------------
// Variables
// -----------------------------------------

// Variables are used to store data.

let name = "Namish";
const PI = 3.14159;
var age = 20;


// -----------------------------------------
// var
// -----------------------------------------

// Function scoped.
// Can be redeclared and reassigned.
// Avoid using in modern JavaScript.

var x = 10;
var x = 20;
x = 30;

console.log(x); // 30


// -----------------------------------------
// let
// -----------------------------------------

// Block scoped.
// Cannot be redeclared in the same scope.
// Can be reassigned.

let score = 90;
score = 95;

console.log(score);


// -----------------------------------------
// const
// -----------------------------------------

// Block scoped.
// Cannot be redeclared or reassigned.
// Must be initialized during declaration.

const country = "India";

console.log(country);


// -----------------------------------------
// Variable Naming Rules
// -----------------------------------------

// ✔ Can contain letters, digits, _ and $
// ✔ Cannot start with a digit
// ✔ Case-sensitive
// ✔ Cannot use reserved keywords

let firstName = "John";
let _count = 5;
let $price = 100;


// -----------------------------------------
// Primitive Data Types
// -----------------------------------------

// JavaScript has 7 primitive data types.

let str = "Hello";          // String
let num = 25;               // Number
let decimal = 3.14;         // Number
let big = 12345678901234567890n; // BigInt
let isStudent = true;       // Boolean
let value = undefined;      // Undefined
let empty = null;           // Null
let unique = Symbol("id");  // Symbol


// -----------------------------------------
// String
// -----------------------------------------

// Stores textual data.

let language = "JavaScript";

console.log(language);


// -----------------------------------------
// Number
// -----------------------------------------

// Stores integers and floating-point numbers.

let marks = 95;
let pi = 3.14;

console.log(marks);
console.log(pi);


// -----------------------------------------
// BigInt
// -----------------------------------------

// Used for very large integers.

let bigNum = 999999999999999999999999n;

console.log(bigNum);


// -----------------------------------------
// Boolean
// -----------------------------------------

// Represents true or false.

let isLoggedIn = true;

console.log(isLoggedIn);


// -----------------------------------------
// Undefined
// -----------------------------------------

// Variable declared but not assigned a value.

let city;

console.log(city); // undefined


// -----------------------------------------
// Null
// -----------------------------------------

// Represents an intentional empty value.

let user = null;

console.log(user);


// -----------------------------------------
// Symbol
// -----------------------------------------

// Creates unique identifiers.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false


// -----------------------------------------
// Non-Primitive Data Types
// -----------------------------------------

// Objects store collections of data.

let person = {
    name: "Namish",
    age: 20
};

console.log(person);


// -----------------------------------------
// Array
// -----------------------------------------

// Stores multiple values in a single variable.

let colors = ["Red", "Green", "Blue"];

console.log(colors);


// -----------------------------------------
// Function
// -----------------------------------------

// Functions are also objects in JavaScript.

function greet() {
    console.log("Hello!");
}

greet();


// -----------------------------------------
// typeof Operator
// -----------------------------------------

// Returns the data type of a value.

console.log(typeof "Hello");      // string
console.log(typeof 100);          // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof Symbol());     // symbol
console.log(typeof 100n);         // bigint
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function(){}); // function
console.log(typeof null);         // object (known JS bug)


// -----------------------------------------
// Dynamic Typing
// -----------------------------------------

// A variable can store different data types over time.

let value1 = 100;

value1 = "Hello";
value1 = true;

console.log(value1);


// -----------------------------------------
// Difference: undefined vs null
// -----------------------------------------

// undefined -> Value not assigned.
// null      -> Intentionally empty.

let a;
let b = null;

console.log(a); // undefined
console.log(b); // null


// -----------------------------------------
// Equality Operators
// -----------------------------------------

// ==  -> Compares values only.
// === -> Compares value and type.

console.log(5 == "5");   // true
console.log(5 === "5");  // false


// -----------------------------------------
// Hoisting
// -----------------------------------------

// var is hoisted and initialized as undefined.

console.log(v); // undefined

var v = 10;


// let and const are hoisted but remain in
// the Temporal Dead Zone (TDZ).

// console.log(num2); // ReferenceError
let num2 = 50;


// -----------------------------------------
// Scope
// -----------------------------------------

// var -> Function Scope
// let -> Block Scope
// const -> Block Scope

{
    var a1 = 10;
    let b1 = 20;
    const c1 = 30;
}

console.log(a1); // 10
// console.log(b1); // Error
// console.log(c1); // Error


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Use const by default.
// ✔ Use let when value changes.
// ✔ Avoid var.
// ✔ Use meaningful variable names.
// ✔ Prefer camelCase naming.


// =========================================
// End of Notes
// =========================================