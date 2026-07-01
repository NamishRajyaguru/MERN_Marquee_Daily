// =========================================
// JavaScript Control Statements
// =========================================


// -----------------------------------------
// if Statement
// -----------------------------------------

// Executes a block if the condition is true.

let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
}


// -----------------------------------------
// if...else Statement
// -----------------------------------------

// Executes one block if true, another if false.

let marks = 30;

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// -----------------------------------------
// else if Ladder
// -----------------------------------------

// Checks multiple conditions.

let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// -----------------------------------------
// Nested if
// -----------------------------------------

// An if statement inside another if statement.

let loggedIn = true;
let isAdmin = false;

if (loggedIn) {
    if (isAdmin) {
        console.log("Welcome Admin");
    } else {
        console.log("Welcome User");
    }
}


// -----------------------------------------
// switch Statement
// -----------------------------------------

// Used when comparing one value against multiple cases.

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}


// -----------------------------------------
// Fall Through in switch
// -----------------------------------------

// Without break, execution continues to the next case.

let fruit = "Apple";

switch (fruit) {
    case "Apple":
        console.log("Apple");
    case "Mango":
        console.log("Mango");
        break;
}

// Output:
// Apple
// Mango


// -----------------------------------------
// Ternary Operator
// -----------------------------------------

// Short form of if...else.

let num = 10;

let result = (num % 2 === 0) ? "Even" : "Odd";

console.log(result);


// -----------------------------------------
// for Loop
// -----------------------------------------

// Repeats code for a fixed number of times.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// -----------------------------------------
// while Loop
// -----------------------------------------

// Executes while the condition is true.

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


// -----------------------------------------
// do...while Loop
// -----------------------------------------

// Executes at least once before checking condition.

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);


// -----------------------------------------
// for...of Loop
// -----------------------------------------

// Iterates over iterable objects like arrays and strings.

let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(color);
}


// -----------------------------------------
// for...in Loop
// -----------------------------------------

// Iterates over the keys of an object.

let person = {
    name: "Namish",
    age: 20
};

for (let key in person) {
    console.log(key, person[key]);
}


// -----------------------------------------
// break Statement
// -----------------------------------------

// Immediately exits a loop or switch.

for (let k = 1; k <= 10; k++) {

    if (k == 6)
        break;

    console.log(k);
}


// -----------------------------------------
// continue Statement
// -----------------------------------------

// Skips the current iteration.

for (let k = 1; k <= 5; k++) {

    if (k == 3)
        continue;

    console.log(k);
}

// Output:
// 1 2 4 5


// -----------------------------------------
// Labeled break
// -----------------------------------------

// Exits an outer loop using a label.

outer:

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        if (i == 2 && j == 2)
            break outer;

        console.log(i, j);
    }
}


// -----------------------------------------
// Labeled continue
// -----------------------------------------

// Skips to the next iteration of the labeled loop.

outer:

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        if (j == 2)
            continue outer;

        console.log(i, j);
    }
}


// -----------------------------------------
// Empty Statement
// -----------------------------------------

// A lone semicolon represents an empty statement.

let count = 0;

while (count < 3)
    count++;

;

// Does nothing.


// -----------------------------------------
// Infinite Loop
// -----------------------------------------

// Loop that never ends unless stopped manually.

// while (true) {
//     console.log("Running...");
// }


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Use switch for many fixed cases.
// ✔ Use for when number of iterations is known.
// ✔ Use while when iterations are unknown.
// ✔ Use for...of for Arrays & Strings.
// ✔ Use for...in for Objects.
// ✔ Avoid unnecessary nested if statements.
// ✔ Always use break in switch unless fall-through is intended.


// =========================================
// End of Notes
// =========================================