// =========================================
// JavaScript Classes
// =========================================


// -----------------------------------------
// What is a Class?
// -----------------------------------------

// A class is a blueprint for creating objects.


// -----------------------------------------
// Creating a Class
// -----------------------------------------

// Use the class keyword.

{
    class Person {

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    const p = new Person("Alice", 20);

    console.log(p);
}


// -----------------------------------------
// Constructor
// -----------------------------------------

// Initializes object properties.

{
    class Student {

        constructor(name) {
            this.name = name;
        }
    }

    const s = new Student("Bob");

    console.log(s.name);
}


// -----------------------------------------
// Methods
// -----------------------------------------

// Functions inside a class.

{
    class Person {

        constructor(name) {
            this.name = name;
        }

        greet() {
            console.log("Hello " + this.name);
        }
    }

    const p = new Person("Charlie");

    p.greet();
}


// -----------------------------------------
// Multiple Objects
// -----------------------------------------

// One class can create many objects.

{
    class Car {

        constructor(brand) {
            this.brand = brand;
        }
    }

    const c1 = new Car("BMW");
    const c2 = new Car("Audi");

    console.log(c1);
    console.log(c2);
}


// -----------------------------------------
// Class Expression
// -----------------------------------------

// Classes can also be expressions.

{
    const Animal = class {

        constructor(name) {
            this.name = name;
        }
    };

    const a = new Animal("Dog");

    console.log(a);
}


// -----------------------------------------
// Getters
// -----------------------------------------

// Access a property like a variable.

{
    class Rectangle {

        constructor(width) {
            this.width = width;
        }

        get value() {
            return this.width;
        }
    }

    const r = new Rectangle(50);

    console.log(r.value);
}


// -----------------------------------------
// Setters
// -----------------------------------------

// Update a property like a variable.

{
    class Rectangle {

        constructor() {
            this.width = 0;
        }

        set value(width) {
            this.width = width;
        }
    }

    const r = new Rectangle();

    r.value = 100;

    console.log(r.width);
}


// -----------------------------------------
// Static Methods
// -----------------------------------------

// Belong to the class, not objects.

{
    class MathUtil {

        static add(a, b) {
            return a + b;
        }
    }

    console.log(MathUtil.add(2, 3));
}


// -----------------------------------------
// Static Properties
// -----------------------------------------

// Shared by the class itself.

{
    class Company {

        static country = "India";
    }

    console.log(Company.country);
}


// -----------------------------------------
// Inheritance
// -----------------------------------------

// Child class inherits parent class.

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
// super()
// -----------------------------------------

// Calls the parent constructor.

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
// Method Overriding
// -----------------------------------------

// Child replaces parent method.

{
    class Animal {

        speak() {
            console.log("Animal Sound");
        }
    }

    class Dog extends Animal {

        speak() {
            console.log("Bark");
        }
    }

    new Dog().speak();
}


// -----------------------------------------
// Calling Parent Method
// -----------------------------------------

// Use super.method().

{
    class Animal {

        speak() {
            console.log("Animal");
        }
    }

    class Dog extends Animal {

        speak() {

            super.speak();

            console.log("Dog");
        }
    }

    new Dog().speak();
}


// -----------------------------------------
// Public Fields
// -----------------------------------------

// Properties can be declared directly.

{
    class Person {

        city = "Vadodara";
    }

    const p = new Person();

    console.log(p.city);
}


// -----------------------------------------
// Private Fields
// -----------------------------------------

// Accessible only inside the class.

{
    class Bank {

        #balance = 1000;

        show() {
            console.log(this.#balance);
        }
    }

    const b = new Bank();

    b.show();
}


// -----------------------------------------
// instanceof
// -----------------------------------------

// Checks class membership.

{
    class Person {}

    const p = new Person();

    console.log(p instanceof Person);
}


// -----------------------------------------
// Class Inheritance Chain
// -----------------------------------------

// Classes can inherit multiple levels.

{
    class A {}

    class B extends A {}

    class C extends B {}

    const obj = new C();

    console.log(obj instanceof A);
    console.log(obj instanceof B);
    console.log(obj instanceof C);
}


// -----------------------------------------
// Classes are Functions
// -----------------------------------------

// A class is a special type of function.

{
    class Person {}

    console.log(typeof Person);
}


// -----------------------------------------
// Prototype
// -----------------------------------------

// Methods are stored on the prototype.

{
    class Person {

        greet() {}
    }

    console.log(Person.prototype);
}


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Use PascalCase for class names.
// ✔ Use constructor() for initialization.
// ✔ Share methods instead of creating them inside constructor.
// ✔ Use extends for inheritance.
// ✔ Use static for utility methods.
// ✔ Use private fields (#) when needed.


// =========================================
// Class Hierarchy
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
      new Dog()

*/


// =========================================
// End of Notes
// =========================================