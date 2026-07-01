// =========================================
// JavaScript Operators
// =========================================


// -----------------------------------------
// Arithmetic Operators
// -----------------------------------------

// Used to perform mathematical calculations.

let a = 10;
let b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1  (Remainder)
console.log(a ** b); // 1000 (Exponentiation)


// -----------------------------------------
// Increment & Decrement
// -----------------------------------------

// ++ increases value by 1.
// -- decreases value by 1.

let x = 5;

console.log(++x); // 6 (Pre Increment)
console.log(x++); // 6 (Post Increment)
console.log(x);   // 7

console.log(--x); // 6 (Pre Decrement)
console.log(x--); // 6 (Post Decrement)
console.log(x);   // 5


// -----------------------------------------
// Assignment Operators
// -----------------------------------------

// Used to assign or update values.

let num = 10;

num += 5; // 15
num -= 2; // 13
num *= 2; // 26
num /= 2; // 13
num %= 5; // 3
num **= 2; // 9

console.log(num);


// -----------------------------------------
// Comparison Operators
// -----------------------------------------

// Used to compare two values.
// Returns true or false.

console.log(10 == "10");   // true
console.log(10 === "10");  // false
console.log(10 != "10");   // false
console.log(10 !== "10");  // true
console.log(10 > 5);       // true
console.log(10 < 5);       // false
console.log(10 >= 10);     // true
console.log(10 <= 5);      // false


// -----------------------------------------
// Logical Operators
// -----------------------------------------

// Used to combine multiple conditions.

let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // true (AND)
console.log(age < 18 || hasLicense);  // true (OR)
console.log(!hasLicense);             // false (NOT)


// -----------------------------------------
// Bitwise Operators
// -----------------------------------------

// Operate on binary representation.

console.log(5 & 3); // 1
console.log(5 | 3); // 7
console.log(5 ^ 3); // 6
console.log(~5);    // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2


// -----------------------------------------
// String Operator
// -----------------------------------------

// '+' joins strings together.

let first = "Hello";
let last = "World";

console.log(first + " " + last); // Hello World


// -----------------------------------------
// Ternary Operator
// -----------------------------------------

// Short form of if...else.

let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);


// -----------------------------------------
// Nullish Coalescing Operator (??)
// -----------------------------------------

// Returns right value only if left is null or undefined.

let username = null;

console.log(username ?? "Guest"); // Guest

let city = "";

console.log(city ?? "Unknown"); // ""


// -----------------------------------------
// Optional Chaining Operator (?.)
// -----------------------------------------

// Safely accesses nested object properties.

let user = {
    name: "Namish"
};

console.log(user?.name); // Namish
console.log(user?.address?.city); // undefined


// -----------------------------------------
// typeof Operator
// -----------------------------------------

// Returns the data type of a value.

console.log(typeof 100);      // number
console.log(typeof "Hello");  // string
console.log(typeof true);     // boolean


// -----------------------------------------
// instanceof Operator
// -----------------------------------------

// Checks whether an object belongs to a class.

let arr = [1, 2, 3];

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true


// -----------------------------------------
// in Operator
// -----------------------------------------

// Checks whether a property exists in an object.

let person = {
    name: "Namish",
    age: 20
};

console.log("name" in person); // true
console.log("city" in person); // false


// -----------------------------------------
// delete Operator
// -----------------------------------------

// Removes a property from an object.

delete person.age;

console.log(person);


// -----------------------------------------
// Comma Operator
// -----------------------------------------

// Evaluates multiple expressions and returns the last one.

let value = (1, 2, 3);

console.log(value); // 3


// -----------------------------------------
// Operator Precedence
// -----------------------------------------

// Operators with higher precedence execute first.

console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20


// -----------------------------------------
// Short-Circuit Evaluation
// -----------------------------------------

// && stops when first false is found.
// || stops when first true is found.

console.log(false && true); // false
console.log(true || false); // true


// -----------------------------------------
// Truthy & Falsy Values
// -----------------------------------------

// Falsy values:
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// Everything else is Truthy.

console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false


// -----------------------------------------
// Common Interview Difference
// -----------------------------------------

// ==  -> Loose Equality (type conversion)
// === -> Strict Equality (no conversion)

console.log(5 == "5");   // true
console.log(5 === "5");  // false


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Prefer === over ==
// ✔ Use ?? instead of || for default values
// ✔ Use ?. to avoid undefined errors
// ✔ Use parentheses when expressions become complex


// =========================================
// End of Notes
// =========================================