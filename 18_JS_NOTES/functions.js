// =========================================
// JavaScript Functions
// =========================================


// -----------------------------------------
// Function Declaration
// -----------------------------------------

// A reusable block of code that performs a task.

function greet() {
    console.log("Hello!");
}

greet();


// -----------------------------------------
// Function with Parameters
// -----------------------------------------

// Parameters receive values passed to the function.

function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// -----------------------------------------
// Function with Return Value
// -----------------------------------------

// return sends a value back to the caller.

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log(result);


// -----------------------------------------
// Function Expression
// -----------------------------------------

// Function stored inside a variable.

const square = function(num) {
    return num * num;
};

console.log(square(6));


// -----------------------------------------
// Anonymous Function
// -----------------------------------------

// Function without a name.
// Mostly used as callbacks.

const message = function() {
    console.log("Anonymous Function");
};

message();


// -----------------------------------------
// Arrow Function
// -----------------------------------------

// Shorter syntax introduced in ES6.

const sum = (a, b) => {
    return a + b;
};

console.log(sum(5, 7));


// -----------------------------------------
// Arrow Function (Single Expression)
// -----------------------------------------

// return is implicit.

const cube = num => num ** 3;

console.log(cube(3));


// -----------------------------------------
// Default Parameters
// -----------------------------------------

// Uses a default value if no argument is passed.

function greetUser(name = "Guest") {
    console.log(`Hello ${name}`);
}

greetUser();
greetUser("Namish");


// -----------------------------------------
// Rest Parameters (...)
// -----------------------------------------

// Accepts any number of arguments.

function total(...nums) {

    let sum = 0;

    for (let num of nums)
        sum += num;

    return sum;
}

console.log(total(1, 2, 3, 4));


// -----------------------------------------
// Arguments Object
// -----------------------------------------

// Stores all passed arguments.
// Available only in regular functions.

function showArgs() {
    console.log(arguments);
}

showArgs(10, 20, 30);


// -----------------------------------------
// Callback Function
// -----------------------------------------

// Function passed as an argument to another function.

function greet(callback) {
    console.log("Hello");
    callback();
}

function bye() {
    console.log("Goodbye");
}

greet(bye);


// -----------------------------------------
// Higher-Order Function
// -----------------------------------------

// Function that takes or returns another function.

function operation(a, b, func) {
    return func(a, b);
}

console.log(operation(10, 20, (x, y) => x + y));


// -----------------------------------------
// Immediately Invoked Function Expression
// (IIFE)
// -----------------------------------------

// Executes immediately after creation.

(function () {
    console.log("IIFE Executed");
})();


// -----------------------------------------
// Recursive Function
// -----------------------------------------

// Function that calls itself.

function factorial(n) {

    if (n == 1)
        return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5));


// -----------------------------------------
// Nested Function
// -----------------------------------------

// Function declared inside another function.

function outer() {

    function inner() {
        console.log("Inner Function");
    }

    inner();
}

outer();


// -----------------------------------------
// Lexical Scope
// -----------------------------------------

// Inner functions can access outer variables.

let language = "JavaScript";

function outerFunc() {

    function innerFunc() {
        console.log(language);
    }

    innerFunc();
}

outerFunc();


// -----------------------------------------
// Closure
// -----------------------------------------

// A function remembers variables from its outer scope.

function counter() {

    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2


// -----------------------------------------
// Hoisting
// -----------------------------------------

// Function declarations are hoisted.

sayHello();

function sayHello() {
    console.log("Hello");
}


// Function expressions are NOT hoisted.

// greet();

// const greet = function () {
//     console.log("Hello");
// };


// -----------------------------------------
// this Keyword
// -----------------------------------------

// Refers to the object calling the function.

const person = {
    name: "Namish",

    greet() {
        console.log(this.name);
    }
};

person.greet();


// -----------------------------------------
// Generator Function
// -----------------------------------------

// Can pause and resume execution using yield.

function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbers();

console.log(gen.next().value);
console.log(gen.next().value);


// -----------------------------------------
// Function Constructor
// -----------------------------------------

// Creates a function dynamically.
// Rarely used.

const addNums = new Function("a", "b", "return a + b");

console.log(addNums(5, 8));


// -----------------------------------------
// Pure Function
// -----------------------------------------

// Always returns the same output for the same input.

function double(num) {
    return num * 2;
}


// -----------------------------------------
// Impure Function
// -----------------------------------------

// Depends on or modifies external state.

let value = 10;

function increase() {
    value++;
}

increase();

// -----------------------------------------
// Difference: Parameters vs Arguments
// -----------------------------------------

// Parameters are variables in the function definition.
// Arguments are actual values passed during the function call.

function greet(name) { // Parameter
    console.log(`Hello ${name}`);
}

greet("Namish"); // Argument


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Use function declarations for reusable logic.
// ✔ Prefer arrow functions for short callbacks.
// ✔ Use return instead of console.log when possible.
// ✔ Keep functions small and focused.
// ✔ Avoid modifying global variables.
// ✔ Use meaningful parameter names.


// =========================================
// End of Notes
// =========================================