// =========================================
// JavaScript Constructors
// =========================================


// -----------------------------------------
// What is a Constructor?
// -----------------------------------------

// A constructor is used to create and
// initialize new objects.


// -----------------------------------------
// Constructor Function
// -----------------------------------------

// Function used with the 'new' keyword.

{
    function Person(name, age) {

        this.name = name;
        this.age = age;
    }

    const p1 = new Person("Alice", 20);

    console.log(p1);
}


// -----------------------------------------
// Multiple Objects
// -----------------------------------------

// Same constructor can create many objects.

{
    function Student(name) {
        this.name = name;
    }

    const s1 = new Student("Bob");
    const s2 = new Student("Charlie");

    console.log(s1);
    console.log(s2);
}


// -----------------------------------------
// Methods in Constructor
// -----------------------------------------

// Constructors can define methods.

{
    function Car(brand) {

        this.brand = brand;

        this.show = function () {
            console.log(this.brand);
        };
    }

    const c = new Car("BMW");

    c.show();
}


// -----------------------------------------
// Constructor with Prototype
// -----------------------------------------

// Share methods between all objects.

{
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.sound = function () {
        console.log(this.name + " makes a sound");
    };

    const a = new Animal("Dog");

    a.sound();
}


// -----------------------------------------
// Built-in Constructors
// -----------------------------------------

// JavaScript provides built-in constructors.

{
    let obj = new Object();

    let arr = new Array();

    let str = new String("Hello");

    let num = new Number(100);

    let bool = new Boolean(true);

    let date = new Date();

    console.log(obj, arr, str, num, bool, date);
}


// -----------------------------------------
// Object Constructor
// -----------------------------------------

// Creates an empty object.

{
    let obj = new Object();

    obj.name = "Alice";

    console.log(obj);
}


// -----------------------------------------
// Array Constructor
// -----------------------------------------

// Creates an array.

{
    let arr = new Array(1, 2, 3);

    console.log(arr);
}


// -----------------------------------------
// String Constructor
// -----------------------------------------

// Creates a String object.

{
    let str = new String("Hello");

    console.log(str);
}


// -----------------------------------------
// Number Constructor
// -----------------------------------------

// Creates a Number object.

{
    let num = new Number(50);

    console.log(num);
}


// -----------------------------------------
// Boolean Constructor
// -----------------------------------------

// Creates a Boolean object.

{
    let flag = new Boolean(true);

    console.log(flag);
}


// -----------------------------------------
// Date Constructor
// -----------------------------------------

// Creates a Date object.

{
    let today = new Date();

    console.log(today);
}


// -----------------------------------------
// RegExp Constructor
// -----------------------------------------

// Creates a regular expression.

{
    let regex = new RegExp("\\d+");

    console.log(regex.test("123"));
}


// -----------------------------------------
// Map Constructor
// -----------------------------------------

// Creates a Map.

{
    let map = new Map();

    map.set("name", "Bob");

    console.log(map);
}


// -----------------------------------------
// Set Constructor
// -----------------------------------------

// Creates a Set.

{
    let set = new Set([1, 2, 3]);

    console.log(set);
}


// -----------------------------------------
// Class Constructor
// -----------------------------------------

// Special method inside a class.

{
    class Person {

        constructor(name, age) {

            this.name = name;
            this.age = age;
        }

        show() {
            console.log(this.name);
        }
    }

    const p = new Person("John", 22);

    p.show();
}


// -----------------------------------------
// Constructor vs Object Literal
// -----------------------------------------

// Object literal creates one object.

{
    let user = {
        name: "Alice"
    };

    console.log(user);
}


// Constructor creates many similar objects.

{
    function User(name) {
        this.name = name;
    }

    const u1 = new User("Bob");
    const u2 = new User("Charlie");

    console.log(u1, u2);
}


// -----------------------------------------
// instanceof
// -----------------------------------------

// Checks whether an object belongs
// to a constructor.

{
    function Person() {}

    const p = new Person();

    console.log(p instanceof Person);
}


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Use classes in modern JavaScript.
// ✔ Use constructor functions for legacy code.
// ✔ Put shared methods on prototype.
// ✔ Avoid built-in constructors for primitives.
// ✔ Always use 'new' with constructors.


// =========================================
// End of Notes
// =========================================