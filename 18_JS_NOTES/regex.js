// =========================================
// JavaScript Regular Expressions (RegEx)
// =========================================


// -----------------------------------------
// What is RegEx?
// -----------------------------------------

// RegEx (Regular Expression) is a pattern
// used to search, match, validate or replace text.


// -----------------------------------------
// Creating a RegEx
// -----------------------------------------

// Method 1: Literal (Recommended)

{
    let regex = /hello/;
}


// Method 2: Constructor

{
    let regex = new RegExp("hello");
}


// -----------------------------------------
// test()
// -----------------------------------------

// Returns true if pattern exists.

{
    let regex = /java/i;

    console.log(regex.test("JavaScript")); // true
}


// -----------------------------------------
// exec()
// -----------------------------------------

// Returns the first match as an array.

{
    let regex = /\d+/;

    console.log(regex.exec("Age: 20"));
}


// -----------------------------------------
// match()
// -----------------------------------------

// Returns matching values from a string.

{
    let text = "Cat Bat Rat";

    console.log(text.match(/[A-Z][a-z]+/g));
}


// -----------------------------------------
// matchAll()
// -----------------------------------------

// Returns an iterator of all matches.

{
    let text = "Cat Bat Rat";

    for (let word of text.matchAll(/[A-Z][a-z]+/g)) {
        console.log(word[0]);
    }
}


// -----------------------------------------
// search()
// -----------------------------------------

// Returns index of first match.

{
    let text = "JavaScript";

    console.log(text.search(/Script/));
}


// -----------------------------------------
// replace()
// -----------------------------------------

// Replaces the first match.

{
    let text = "I like Java";

    console.log(text.replace(/Java/, "JavaScript"));
}


// -----------------------------------------
// replaceAll()
// -----------------------------------------

// Replaces every match.

{
    let text = "cat cat cat";

    console.log(text.replaceAll(/cat/g, "dog"));
}


// -----------------------------------------
// Character Classes
// -----------------------------------------

// [] -> Match any one character.

{
    let regex = /[aeiou]/g;

    console.log("JavaScript".match(regex));
}


// -----------------------------------------
// Ranges
// -----------------------------------------

// [a-z] -> Lowercase letters
// [A-Z] -> Uppercase letters
// [0-9] -> Digits

{
    console.log("ABC123".match(/[A-Z]/g));
    console.log("ABC123".match(/[0-9]/g));
}


// -----------------------------------------
// Negated Character Class
// -----------------------------------------

// [^ ] -> Matches everything except.

{
    console.log("abc123".match(/[^0-9]/g));
}


// -----------------------------------------
// Special Character Classes
// -----------------------------------------

// \d -> Digit
// \D -> Not a digit
// \w -> Word character
// \W -> Non-word character
// \s -> Whitespace
// \S -> Non-whitespace

{
    console.log("Age: 20".match(/\d/g));
    console.log("Hello World".match(/\s/g));
}


// -----------------------------------------
// Quantifiers
// -----------------------------------------

// +  -> One or more
// *  -> Zero or more
// ?  -> Zero or one
// {n} -> Exactly n
// {n,} -> At least n
// {n,m} -> Between n and m

{
    console.log("aaa".match(/a+/));
    console.log("12345".match(/\d{5}/));
}


// -----------------------------------------
// Anchors
// -----------------------------------------

// ^ -> Start of string
// $ -> End of string

{
    console.log(/^Hello/.test("Hello World"));
    console.log(/World$/.test("Hello World"));
}


// -----------------------------------------
// Wildcard
// -----------------------------------------

// . -> Matches any character except newline.

{
    console.log(/c.t/.test("cat"));
    console.log(/c.t/.test("cut"));
}


// -----------------------------------------
// Alternation
// -----------------------------------------

// | -> OR operator.

{
    console.log(/cat|dog/.test("dog"));
}


// -----------------------------------------
// Grouping
// -----------------------------------------

// () -> Groups patterns together.

{
    console.log(/(ab)+/.test("abab"));
}


// -----------------------------------------
// Escape Characters
// -----------------------------------------

// \ escapes special characters.

{
    console.log(/\./.test("."));
    console.log(/\*/.test("*"));
}


// -----------------------------------------
// Common Flags
// -----------------------------------------

// g -> Global search
// i -> Ignore case
// m -> Multiline
// s -> Dot matches newline

{
    console.log("Cat cat".match(/cat/gi));
}


// -----------------------------------------
// Email Validation
// -----------------------------------------

// Simple email pattern.

{
    let email = "test@gmail.com";

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    console.log(regex.test(email));
}


// -----------------------------------------
// Phone Number Validation
// -----------------------------------------

// Checks a 10-digit number.

{
    let phone = "9876543210";

    console.log(/^\d{10}$/.test(phone));
}


// -----------------------------------------
// Password Validation
// -----------------------------------------

// Minimum 8 characters.

{
    let password = "Hello123";

    console.log(/^.{8,}$/.test(password));
}


// -----------------------------------------
// Split using RegEx
// -----------------------------------------

// Splits string using a pattern.

{
    let text = "Apple,Banana Mango";

    console.log(text.split(/[ ,]+/));
}


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Use literals (/abc/) whenever possible.
// ✔ Use test() for validation.
// ✔ Use match() to extract data.
// ✔ Use replace() for substitutions.
// ✔ Keep regex simple and readable.


// =========================================
// Common RegEx Cheat Sheet
// =========================================

// .      Any character
// \d     Digit
// \D     Non-digit
// \w     Word character
// \W     Non-word character
// \s     Whitespace
// \S     Non-whitespace
// ^      Start
// $      End
// *      0 or more
// +      1 or more
// ?      Optional
// []     Character class
// [^]    Negated class
// ()     Group
// |      OR
// {}     Quantifier


// =========================================
// End of Notes
// =========================================