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

// =========================================
// Prototype-Based Inheritance
// =========================================


// -----------------------------------------
// What is Prototype Inheritance?
// -----------------------------------------

// JavaScript objects inherit properties and
// methods through the prototype chain.


// -----------------------------------------
// Inheriting using Object.create()
// -----------------------------------------

// Child object inherits from parent object.

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
// Prototype Chain Lookup
// -----------------------------------------

// JavaScript searches upward until it
// finds the requested property.

{
    const animal = {
        legs: 4
    };

    const dog = Object.create(animal);

    console.log(dog.legs);
}


// -----------------------------------------
// Own vs Inherited Property
// -----------------------------------------

// hasOwnProperty() checks only own properties.

{
    const animal = {
        legs: 4
    };

    const dog = Object.create(animal);

    dog.name = "Tommy";

    console.log(dog.hasOwnProperty("name")); // true
    console.log(dog.hasOwnProperty("legs")); // false
}


// -----------------------------------------
// Constructor Inheritance
// -----------------------------------------

// Parent constructor initializes child properties.

{
    function Animal(name) {
        this.name = name;
    }

    function Dog(name) {

        Animal.call(this, name);
    }

    const d = new Dog("Rocky");

    console.log(d.name);
}


// -----------------------------------------
// Prototype Method Inheritance
// -----------------------------------------

// Child inherits parent's prototype methods.

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
// Adding Child Methods
// -----------------------------------------

// Child can define its own methods.

{
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.eat = function () {
        console.log("Eating");
    };

    function Dog(name) {

        Animal.call(this, name);
    }

    Dog.prototype = Object.create(Animal.prototype);

    Dog.prototype.constructor = Dog;

    Dog.prototype.bark = function () {
        console.log("Bark");
    };

    const d = new Dog("Tommy");

    d.eat();
    d.bark();
}


// -----------------------------------------
// Method Overriding
// -----------------------------------------

// Child can replace parent's method.

{
    function Animal() {}

    Animal.prototype.sound = function () {
        console.log("Animal");
    };

    function Dog() {}

    Dog.prototype = Object.create(Animal.prototype);

    Dog.prototype.constructor = Dog;

    Dog.prototype.sound = function () {
        console.log("Bark");
    };

    new Dog().sound();
}


// -----------------------------------------
// Calling Parent Method
// -----------------------------------------

// Parent method can still be called.

{
    function Animal() {}

    Animal.prototype.sound = function () {
        console.log("Animal");
    };

    function Dog() {}

    Dog.prototype = Object.create(Animal.prototype);

    Dog.prototype.constructor = Dog;

    Dog.prototype.sound = function () {

        Animal.prototype.sound.call(this);

        console.log("Dog");
    };

    new Dog().sound();
}


// -----------------------------------------
// Prototype Chain Inspection
// -----------------------------------------

// Every object points to its prototype.

{
    function Animal() {}

    function Dog() {}

    Dog.prototype = Object.create(Animal.prototype);

    Dog.prototype.constructor = Dog;

    const d = new Dog();

    console.log(Object.getPrototypeOf(d) === Dog.prototype);
    console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
}


// -----------------------------------------
// instanceof
// -----------------------------------------

// Checks whether a constructor exists
// in an object's prototype chain.

{
    function Animal() {}

    function Dog() {}

    Dog.prototype = Object.create(Animal.prototype);

    Dog.prototype.constructor = Dog;

    const d = new Dog();

    console.log(d instanceof Dog);
    console.log(d instanceof Animal);
}


// -----------------------------------------
// Prototype Chain
// -----------------------------------------

// All objects eventually inherit from Object.

{
    function Animal() {}

    function Dog() {}

    Dog.prototype = Object.create(Animal.prototype);

    const d = new Dog();

    console.log(Object.getPrototypeOf(d));
    console.log(Object.getPrototypeOf(Dog.prototype));
    console.log(Object.getPrototypeOf(Animal.prototype));
}


// -----------------------------------------
// Inheritance Hierarchy
// -----------------------------------------

/*

                d (object)
                    │
                    ▼
            Dog.prototype
                    │
                    ▼
          Animal.prototype
                    │
                    ▼
          Object.prototype
                    │
                    ▼
                  null

*/


// -----------------------------------------
// Two Important Lines
// -----------------------------------------

// Object.create() links the prototype chain.
// constructor restores the constructor reference.

{
    function Animal() {}

    function Dog() {}

    Dog.prototype = Object.create(Animal.prototype);

    Dog.prototype.constructor = Dog;

    console.log(Dog.prototype.constructor === Dog);
}


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Use Object.create() for prototype inheritance.
// ✔ Use Parent.call(this, ...) for constructor inheritance.
// ✔ Restore constructor after replacing prototype.
// ✔ Share methods through prototypes.
// ✔ Prefer classes in modern JavaScript, but understand
//   prototypes because classes use them internally.


// =========================================
// End of Notes
// =========================================