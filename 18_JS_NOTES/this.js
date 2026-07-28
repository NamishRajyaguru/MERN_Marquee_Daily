// =========================================
// JavaScript this Keyword
// =========================================


// -----------------------------------------
// What is this?
// -----------------------------------------

// 'this' refers to the object that is
// currently calling the function.


// -----------------------------------------
// Global Scope
// -----------------------------------------

// In browsers:
// this === window

{
    console.log(this);
}


// -----------------------------------------
// Inside an Object
// -----------------------------------------

// 'this' refers to the object.

{
    const person = {

        name: "Namish",

        greet() {
            console.log(this.name);
        }
    };

    person.greet();
}


// -----------------------------------------
// Inside a Regular Function
// -----------------------------------------

// In non-strict mode:
// this -> global object

function greet() {
    console.log(this);
}

greet();


// -----------------------------------------
// Strict Mode
// -----------------------------------------

// In strict mode,
// this becomes undefined.

"use strict";

function hello() {
    console.log(this);
}

hello();


// -----------------------------------------
// Arrow Function
// -----------------------------------------

// Arrow functions DO NOT have their own this.
// They inherit it from the surrounding scope.

const person = {

    name: "Bob",

    greet: () => {
        console.log(this.name);
    }
};

person.greet(); // undefined


// -----------------------------------------
// Regular Method vs Arrow Function
// -----------------------------------------

// Use regular functions for object methods.

const student = {

    name: "Alice",

    show1() {
        console.log(this.name);
    },

    show2: () => {
        console.log(this.name);
    }
};

student.show1(); // Alice
student.show2(); // undefined


// -----------------------------------------
// Event Listener
// -----------------------------------------

// this refers to the element that triggered
// the event.

button.addEventListener("click", function () {
    console.log(this);
});


// With arrow function

button.addEventListener("click", () => {
    console.log(this);
});

// Different result.


// -----------------------------------------
// call()
// -----------------------------------------

// Calls a function with custom this.

function greet(city) {
    console.log(this.name, city);
}

const person = {
    name: "Namish"
};

greet.call(person, "Vadodara");


// -----------------------------------------
// apply()
// -----------------------------------------

// Same as call(), but arguments are passed
// as an array.

greet.apply(person, ["Vadodara"]);


// -----------------------------------------
// bind()
// -----------------------------------------

// Returns a new function with fixed this.

const newFunc = greet.bind(person);

newFunc("Vadodara");


// -----------------------------------------
// Constructor Function
// -----------------------------------------

// this refers to the new object.

function Person(name) {

    this.name = name;
}

const p = new Person("Bob");

console.log(p);


// -----------------------------------------
// Class
// -----------------------------------------

// this refers to the current object.

class Student {

    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(this.name);
    }
}

const s = new Student("Alice");

s.show();


// -----------------------------------------
// Summary
// -----------------------------------------

// Global Scope      -> Global Object
// Object Method     -> Current Object
// Regular Function  -> Global / undefined
// Arrow Function    -> Surrounding Scope
// Constructor       -> Newly Created Object
// Class             -> Current Instance
// call()            -> Custom this
// apply()           -> Custom this
// bind()            -> Returns new function