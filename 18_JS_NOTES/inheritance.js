// =========================================
// JavaScript Inheritance
// =========================================


// -----------------------------------------
// What is Inheritance?
// -----------------------------------------

// Inheritance allows one class or object
// to acquire properties and methods of another.


// -----------------------------------------
// Basic Inheritance
// -----------------------------------------

// Use the extends keyword.

{
    class Animal {

        eat() {
            console.log("Eating");
        }
    }

    class Dog extends Animal {}

    const d = new Dog();

    d.eat();
}


// -----------------------------------------
// Parent & Child Class
// -----------------------------------------

// Child inherits everything from parent.

{
    class Vehicle {

        start() {
            console.log("Vehicle Started");
        }
    }

    class Car extends Vehicle {}

    const c = new Car();

    c.start();
}


// -----------------------------------------
// constructor() with Inheritance
// -----------------------------------------

// Child constructor calls parent constructor.

{
    class Animal {

        constructor(name) {
            this.name = name;
        }
    }

    class Dog extends Animal {

        constructor(name, breed) {

            super(name);

            this.breed = breed;
        }
    }

    const d = new Dog("Tommy", "Labrador");

    console.log(d);
}


// -----------------------------------------
// super()
// -----------------------------------------

// Calls parent constructor or method.

{
    class Animal {

        speak() {
            console.log("Animal Sound");
        }
    }

    class Dog extends Animal {

        speak() {

            super.speak();

            console.log("Bark");
        }
    }

    new Dog().speak();
}


// -----------------------------------------
// Method Overriding
// -----------------------------------------

// Child replaces parent method.

{
    class Animal {

        sound() {
            console.log("Animal");
        }
    }

    class Dog extends Animal {

        sound() {
            console.log("Bark");
        }
    }

    new Dog().sound();
}


// -----------------------------------------
// Accessing Parent Properties
// -----------------------------------------

// Parent properties are inherited.

{
    class Person {

        constructor(name) {
            this.name = name;
        }
    }

    class Student extends Person {}

    const s = new Student("Alice");

    console.log(s.name);
}


// -----------------------------------------
// Multi-Level Inheritance
// -----------------------------------------

// A class can inherit another child class.

{
    class A {

        showA() {
            console.log("A");
        }
    }

    class B extends A {

        showB() {
            console.log("B");
        }
    }

    class C extends B {

        showC() {
            console.log("C");
        }
    }

    const obj = new C();

    obj.showA();
    obj.showB();
    obj.showC();
}


// -----------------------------------------
// instanceof
// -----------------------------------------

// Checks inheritance relationship.

{
    class Animal {}

    class Dog extends Animal {}

    const d = new Dog();

    console.log(d instanceof Dog);
    console.log(d instanceof Animal);
}


// -----------------------------------------
// Prototype Chain
// -----------------------------------------

// Inheritance is implemented using prototypes.

{
    class Animal {}

    class Dog extends Animal {}

    console.log(Dog.prototype);
    console.log(Object.getPrototypeOf(Dog.prototype));
}


// -----------------------------------------
// Inheriting Static Methods
// -----------------------------------------

// Static methods are inherited too.

{
    class Animal {

        static info() {
            console.log("Animal Class");
        }
    }

    class Dog extends Animal {}

    Dog.info();
}


// -----------------------------------------
// Inheritance with Constructor Functions
// -----------------------------------------

// Older way using prototypes.

{
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.eat = function () {
        console.log(this.name + " eats");
    };

    function Dog(name) {
        Animal.call(this, name);
    }

    Dog.prototype = Object.create(Animal.prototype);

    Dog.prototype.constructor = Dog;

    const d = new Dog("Rocky");

    d.eat();
}


// -----------------------------------------
// Object.create()
// -----------------------------------------

// Creates an object that inherits another.

{
    const animal = {

        eat() {
            console.log("Eating");
        }
    };

    const dog = Object.create(animal);

    dog.eat();
}


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Use extends for modern JavaScript.
// ✔ Always call super() before using this.
// ✔ Override methods only when necessary.
// ✔ Prefer composition over deep inheritance.
// ✔ Understand prototype chain for interviews.


// =========================================
// Inheritance Hierarchy
// =========================================

/*

        Animal
           ▲
           │
        extends
           │
          Dog
           ▲
           │
        Labrador

*/


// =========================================
// Prototype Chain
// =========================================

/*

dog
 ▲
 │
Dog.prototype
 ▲
 │
Animal.prototype
 ▲
 │
Object.prototype
 ▲
 │
null

*/


// =========================================
// End of Notes
// =========================================