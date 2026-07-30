// =========================================
// JavaScript Prototype
// =========================================


// -----------------------------------------
// What is Prototype?
// -----------------------------------------

// Every JavaScript function has a prototype
// object used to share properties and methods.


// -----------------------------------------
// Basic Prototype
// -----------------------------------------

// Methods added to the prototype are shared
// by all objects.

{
    function Person(name) {
        this.name = name;
    }

    Person.prototype.greet = function () {
        console.log("Hello " + this.name);
    };

    const p1 = new Person("Alice");
    const p2 = new Person("Bob");

    p1.greet();
    p2.greet();
}


// -----------------------------------------
// Without Prototype
// -----------------------------------------

// Every object gets its own copy of the method.

{
    function Student(name) {

        this.name = name;

        this.show = function () {
            console.log(this.name);
        };
    }

    const s1 = new Student("John");
    const s2 = new Student("Jane");

    console.log(s1.show === s2.show); // false
}


// -----------------------------------------
// With Prototype
// -----------------------------------------

// All objects share the same method.

{
    function Student(name) {
        this.name = name;
    }

    Student.prototype.show = function () {
        console.log(this.name);
    };

    const s1 = new Student("John");
    const s2 = new Student("Jane");

    console.log(s1.show === s2.show); // true
}


// -----------------------------------------
// Adding Properties
// -----------------------------------------

// Prototype can also store properties.

{
    function Car() {}

    Car.prototype.wheels = 4;

    const c = new Car();

    console.log(c.wheels);
}


// -----------------------------------------
// Overriding Prototype Property
// -----------------------------------------

// Object property has higher priority.

{
    function Car() {}

    Car.prototype.color = "Red";

    const c = new Car();

    c.color = "Blue";

    console.log(c.color);
}


// -----------------------------------------
// Accessing Prototype
// -----------------------------------------

// prototype belongs to functions.

{
    function Person() {}

    console.log(Person.prototype);
}


// -----------------------------------------
// __proto__
// -----------------------------------------

// __proto__ points to an object's prototype.

{
    function Person() {}

    const p = new Person();

    console.log(p.__proto__ === Person.prototype);
}


// -----------------------------------------
// Object.getPrototypeOf()
// -----------------------------------------

// Returns an object's prototype.

{
    function Person() {}

    const p = new Person();

    console.log(Object.getPrototypeOf(p));
}


// -----------------------------------------
// Setting Prototype
// -----------------------------------------

// Changes an object's prototype.

{
    const animal = {
        sound() {
            console.log("Animal");
        }
    };

    const dog = {};

    Object.setPrototypeOf(dog, animal);

    dog.sound();
}


// -----------------------------------------
// Prototype Chain
// -----------------------------------------

// JavaScript searches upward until it finds
// the requested property.

{
    const animal = {
        eat() {
            console.log("Eating");
        }
    };

    const dog = {};

    Object.setPrototypeOf(dog, animal);

    dog.eat();
}


// -----------------------------------------
// hasOwnProperty()
// -----------------------------------------

// Checks whether property belongs to object.

{
    function Person() {}

    Person.prototype.city = "Delhi";

    const p = new Person();

    console.log(p.hasOwnProperty("city"));
}


// -----------------------------------------
// constructor Property
// -----------------------------------------

// Points back to the constructor function.

{
    function Person() {}

    console.log(Person.prototype.constructor);
}


// -----------------------------------------
// Prototype Inheritance
// -----------------------------------------

// One prototype can inherit another.

{
    function Animal() {}

    Animal.prototype.sound = function () {
        console.log("Sound");
    };

    function Dog() {}

    Dog.prototype = Object.create(Animal.prototype);

    Dog.prototype.constructor = Dog;

    const d = new Dog();

    d.sound();
}


// -----------------------------------------
// Built-in Prototypes
// -----------------------------------------

// Arrays, Strings, Objects all have prototypes.

{
    console.log(Array.prototype);
    console.log(String.prototype);
    console.log(Object.prototype);
}


// -----------------------------------------
// Extending Built-in Prototype
// -----------------------------------------

// You can add custom methods.

{
    Array.prototype.first = function () {
        return this[0];
    };

    console.log([10, 20, 30].first());
}


// -----------------------------------------
// instanceof
// -----------------------------------------

// Checks the prototype chain.

{
    function Person() {}

    const p = new Person();

    console.log(p instanceof Person);
}


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Share methods using prototype.
// ✔ Prefer Object.getPrototypeOf() over __proto__.
// ✔ Don't modify built-in prototypes in production.
// ✔ Use classes for modern code.
// ✔ Understand prototype chain for interviews.


// =========================================
// Prototype Chain
// =========================================

/*

            Object
               ▲
               │
      Object.prototype
               ▲
               │
      Person.prototype
               ▲
               │
              p1

*/


// =========================================
// End of Notes
// =========================================