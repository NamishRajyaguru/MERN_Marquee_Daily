// =========================================
// JavaScript Symbols
// =========================================


// -----------------------------------------
// Creating a Symbol
// -----------------------------------------

// Symbol is a primitive data type.
// Every Symbol is unique.

{
    let id1 = Symbol();
    let id2 = Symbol();

    console.log(id1 === id2); // false
}


// -----------------------------------------
// Symbol with Description
// -----------------------------------------

// Description is only for debugging.
// It does not affect uniqueness.

{
    let id = Symbol("userID");

    console.log(id);
    console.log(id.description);
}


// -----------------------------------------
// Using Symbol as Object Key
// -----------------------------------------

// Symbol keys avoid property name conflicts.

{
    const ID = Symbol("id");

    let user = {
        name: "Namish",
        [ID]: 101
    };

    console.log(user.name);
    console.log(user[ID]);
}


// -----------------------------------------
// Symbols are Hidden
// -----------------------------------------

// Symbol properties are ignored by
// Object.keys(), values(), entries() and for...in.

{
    const ID = Symbol("id");

    let user = {
        name: "Namish",
        [ID]: 101
    };

    console.log(Object.keys(user));     // ['name']
    console.log(Object.values(user));   // ['Namish']

    for (let key in user) {
        console.log(key); // name
    }
}


// -----------------------------------------
// Access Symbol Properties
// -----------------------------------------

// Use Object.getOwnPropertySymbols()
// to retrieve Symbol keys.

{
    const ID = Symbol("id");

    let user = {
        name: "Namish",
        [ID]: 101
    };

    console.log(Object.getOwnPropertySymbols(user));
}


// -----------------------------------------
// Symbol.for()
// -----------------------------------------

// Creates or retrieves a global Symbol.
// Same key returns the same Symbol.

{
    let s1 = Symbol.for("app");
    let s2 = Symbol.for("app");

    console.log(s1 === s2); // true
}


// -----------------------------------------
// Symbol.keyFor()
// -----------------------------------------

// Returns the key of a global Symbol.

{
    let sym = Symbol.for("database");

    console.log(Symbol.keyFor(sym));
}


// -----------------------------------------
// Well-Known Symbols
// -----------------------------------------

// Built-in Symbols used to customize
// JavaScript behavior.

// Symbol.iterator
// Symbol.toPrimitive
// Symbol.hasInstance
// Symbol.toStringTag
// Symbol.match
// Symbol.replace
// Symbol.search
// Symbol.split


// -----------------------------------------
// typeof Symbol
// -----------------------------------------

// typeof returns "symbol".

{
    let id = Symbol();

    console.log(typeof id); // symbol
}


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Use Symbols for unique object properties.
// ✔ Use Symbol.for() when a Symbol should be shared globally.
// ✔ Use normal strings for regular object keys.
// ✔ Symbols are useful for hiding internal object properties.


// =========================================
// End of Notes
// =========================================