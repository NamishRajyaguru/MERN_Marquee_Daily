// =========================================
// JavaScript Objects
// =========================================


// -----------------------------------------
// Creating an Object
// -----------------------------------------

// Objects store data as key-value pairs.

{
    let person = {
        name: "Namish",
        age: 20,
        city: "Vadodara"
    };

    console.log(person);
}


// -----------------------------------------
// Access Properties
// -----------------------------------------

// Properties can be accessed using dot or bracket notation.

{
    let person = {
        name: "Namish",
        age: 20
    };

    console.log(person.name); // Static Keys
    console.log(person["age"]); // Dynamic Keys
}


// -----------------------------------------
// Add Properties
// -----------------------------------------

// New properties can be added anytime.

{
    let person = {
        name: "Namish"
    };

    person.age = 20;

    console.log(person);
}


// -----------------------------------------
// Update Properties
// -----------------------------------------

// Existing properties can be modified.

{
    let person = {
        name: "Namish",
        age: 20
    };

    person.age = 21;

    console.log(person);
}


// -----------------------------------------
// Delete Properties
// -----------------------------------------

// delete removes a property.

{
    let person = {
        name: "Namish",
        age: 20
    };

    delete person.age;

    console.log(person);
}


// -----------------------------------------
// Object Methods
// -----------------------------------------

// Objects can store functions as properties.

{
    let person = {

        name: "Namish",

        greet() {
            console.log(`Hello ${this.name}`);
        }
    };

    person.greet();
}


// -----------------------------------------
// this Keyword
// -----------------------------------------

// Refers to the current object.

{
    let car = {

        brand: "BMW",

        showBrand() {
            console.log(this.brand);
        }
    };

    car.showBrand();
}


// -----------------------------------------
// Nested Objects
// -----------------------------------------

// Objects can contain other objects.

{
    let student = {

        name: "Namish",

        address: {
            city: "Vadodara",
            state: "Gujarat"
        }
    };

    console.log(student.address.city);
}


// -----------------------------------------
// Object.keys()
// -----------------------------------------

// Returns an array of property names.

{
    let person = {
        name: "Namish",
        age: 20
    };

    console.log(Object.keys(person));
}


// -----------------------------------------
// Object.values()
// -----------------------------------------

// Returns an array of property values.

{
    let person = {
        name: "Namish",
        age: 20
    };

    console.log(Object.values(person));
}


// -----------------------------------------
// Object.entries()
// -----------------------------------------

// Returns key-value pairs as arrays.

{
    let person = {
        name: "Namish",
        age: 20
    };

    console.log(Object.entries(person));
}


// -----------------------------------------
// Object.assign()
// -----------------------------------------

// Copies properties into another object.

{
    let obj1 = { a: 1 };
    let obj2 = { b: 2 };

    let result = Object.assign({}, obj1, obj2);

    console.log(result);
}


// -----------------------------------------
// Object.freeze()
// -----------------------------------------

// Prevents adding, deleting or modifying properties.

{
    let person = {
        name: "Namish"
    };

    Object.freeze(person);

    person.name = "John";

    console.log(person);
}


// -----------------------------------------
// Object.seal()
// -----------------------------------------

// Prevents adding or deleting properties.
// Existing properties can still be modified.

{
    let person = {
        name: "Namish"
    };

    Object.seal(person);

    person.name = "John";

    console.log(person);
}


// -----------------------------------------
// hasOwnProperty()
// -----------------------------------------

// Checks whether a property belongs to the object.

{
    let person = {
        name: "Namish"
    };

    console.log(person.hasOwnProperty("name"));
    console.log(person.hasOwnProperty("age"));
}


// -----------------------------------------
// in Operator
// -----------------------------------------

// Checks if a property exists.

{
    let person = {
        name: "Namish"
    };

    console.log("name" in person);
}


// -----------------------------------------
// for...in Loop
// -----------------------------------------

// Iterates through object keys.

{
    let person = {
        name: "Namish",
        age: 20
    };

    for (let key in person) {
        console.log(key, person[key]);
    }
}


// -----------------------------------------
// Object Destructuring
// -----------------------------------------

// Extracts properties into variables.

{
    let person = {
        name: "Namish",
        age: 20
    };

    let { name, age } = person;

    console.log(name, age);
}


// -----------------------------------------
// Spread Operator (...)
// -----------------------------------------

// Copies or merges objects.

{
    let obj1 = {
        a: 1
    };

    let obj2 = {
        ...obj1,
        b: 2
    };

    console.log(obj2);
}


// -----------------------------------------
// Optional Chaining (?.)
// -----------------------------------------

// Safely accesses nested properties.

{
    let person = {
        name: "Namish"
    };

    console.log(person?.address?.city);
}


// -----------------------------------------
// Constructor Function
// -----------------------------------------

// Creates multiple similar objects.

{
    function Person(name, age) {

        this.name = name;
        this.age = age;
    }

    let p1 = new Person("Namish", 20);
    let p2 = new Person("Rahul", 22);

    console.log(p1);
    console.log(p2);
}


// -----------------------------------------
// Adding Methods to Constructor
// -----------------------------------------

// Methods can be added inside the constructor.

{
    function Student(name) {

        this.name = name;

        this.greet = function () {
            console.log(`Hello ${this.name}`);
        };
    }

    let s1 = new Student("Namish");

    s1.greet();
}


// -----------------------------------------
// Prototype
// -----------------------------------------

// Shared methods should be added to prototype.

{
    function Person(name) {
        this.name = name;
    }

    Person.prototype.greet = function () {
        console.log(`Hello ${this.name}`);
    };

    let p = new Person("Namish");

    p.greet();
}


// -----------------------------------------
// Object Constructor
// -----------------------------------------

// Objects can also be created using new Object().

{
    let person = new Object();

    person.name = "Namish";
    person.age = 20;

    console.log(person);
}


// -----------------------------------------
// Object.create()
// -----------------------------------------

// Creates an object using another object as prototype.

{
    let person = {

        greet() {
            console.log("Hello");
        }
    };

    let student = Object.create(person);

    student.greet();
}


// -----------------------------------------
// Object.fromEntries()
// -----------------------------------------

// Converts key-value pairs into an object.

{
    let entries = [
        ["name", "Namish"],
        ["age", 20]
    ];

    console.log(Object.fromEntries(entries));
}


// -----------------------------------------
// JSON Conversion
// -----------------------------------------

// Convert object ↔ JSON.

{
    let person = {
        name: "Namish",
        age: 20
    };

    let json = JSON.stringify(person);

    console.log(json);

    let obj = JSON.parse(json);

    console.log(obj);
}


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Use object literals whenever possible.
// ✔ Use constructors for creating many similar objects.
// ✔ Prefer prototype methods over creating methods inside constructor.
// ✔ Use Object.keys(), values(), entries() frequently.
// ✔ Use destructuring for cleaner code.
// ✔ Use optional chaining to avoid undefined errors.
// ✔ Freeze objects when they should not change.


// =========================================
// End of Notes
// =========================================