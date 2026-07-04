// =========================================
// JavaScript Arrays
// =========================================


// -----------------------------------------
// Creating Arrays
// -----------------------------------------

// Arrays store multiple values in a single variable.

{
    let arr1 = [10, 20, 30];
    let arr2 = new Array(1, 2, 3);

    console.log(arr1);
    console.log(arr2);
}


// -----------------------------------------
// Access Elements
// -----------------------------------------

// Access elements using index (starts from 0).

{
    let arr = ["Red", "Green", "Blue"];

    console.log(arr[0]);
    console.log(arr[2]);
}


// -----------------------------------------
// Modify Elements
// -----------------------------------------

// Elements can be updated using index.

{
    let arr = [1, 2, 3];

    arr[1] = 20;

    console.log(arr);
}


// -----------------------------------------
// length
// -----------------------------------------

// Returns the number of elements.

{
    let arr = [10, 20, 30, 40];

    console.log(arr.length);
}


// -----------------------------------------
// push()
// -----------------------------------------

// Adds element(s) at the end.

{
    let arr = [1, 2];

    arr.push(3);

    console.log(arr);
}


// -----------------------------------------
// pop()
// -----------------------------------------

// Removes the last element.

{
    let arr = [1, 2, 3];

    arr.pop();

    console.log(arr);
}


// -----------------------------------------
// unshift()
// -----------------------------------------

// Adds element(s) at the beginning.

{
    let arr = [2, 3];

    arr.unshift(1);

    console.log(arr);
}


// -----------------------------------------
// shift()
// -----------------------------------------

// Removes the first element.

{
    let arr = [1, 2, 3];

    arr.shift();

    console.log(arr);
}


// -----------------------------------------
// at()
// -----------------------------------------

// Returns element at given index.
// Supports negative indexing.

{
    let arr = [10, 20, 30];

    console.log(arr.at(0));
    console.log(arr.at(-1));
}


// -----------------------------------------
// indexOf()
// -----------------------------------------

// Returns first occurrence index.

{
    let arr = [10, 20, 30, 20];

    console.log(arr.indexOf(20));
}


// -----------------------------------------
// lastIndexOf()
// -----------------------------------------

// Returns last occurrence index.

{
    let arr = [10, 20, 30, 20];

    console.log(arr.lastIndexOf(20));
}


// -----------------------------------------
// includes()
// -----------------------------------------

// Checks whether an element exists.

{
    let arr = [10, 20, 30];

    console.log(arr.includes(20));
}


// -----------------------------------------
// concat()
// -----------------------------------------

// Joins multiple arrays.

{
    let a = [1, 2];
    let b = [3, 4];

    console.log(a.concat(b));
}


// -----------------------------------------
// join()
// -----------------------------------------

// Converts array into a string.

{
    let arr = ["HTML", "CSS", "JS"];

    console.log(arr.join(" - "));
}


// -----------------------------------------
// slice()
// -----------------------------------------

// Returns a shallow copy of part of an array.

{
    let arr = [10, 20, 30, 40];

    console.log(arr.slice(1, 3));
}


// -----------------------------------------
// splice()
// -----------------------------------------

// Adds, removes or replaces elements.

{
    let arr = [10, 20, 30];

    arr.splice(1, 1, 25);

    console.log(arr);
}


// -----------------------------------------
// reverse()
// -----------------------------------------

// Reverses the array.

{
    let arr = [1, 2, 3];

    arr.reverse();

    console.log(arr);
}


// -----------------------------------------
// sort()
// -----------------------------------------

// Sorts the array.
// Default sorting is alphabetical.

{
    let arr = [5, 2, 9, 1];

    arr.sort((a, b) => a - b);

    console.log(arr);
}


// -----------------------------------------
// fill()
// -----------------------------------------

// Fills part or whole array with a value.

{
    let arr = [1, 2, 3, 4];

    arr.fill(0, 1, 3);

    console.log(arr);
}


// -----------------------------------------
// copyWithin()
// -----------------------------------------

// Copies elements within the same array.

{
    let arr = [1, 2, 3, 4];

    arr.copyWithin(2, 0);

    console.log(arr);
}


// -----------------------------------------
// forEach()
// -----------------------------------------

// Executes a function for every element.

{
    let arr = [1, 2, 3];

    arr.forEach(num => console.log(num));
}


// -----------------------------------------
// map()
// -----------------------------------------

// Returns a new array after transforming elements.

{
    let arr = [1, 2, 3];

    let result = arr.map(num => num * 2);

    console.log(result);
}


// -----------------------------------------
// filter()
// -----------------------------------------

// Returns elements that satisfy a condition.

{
    let arr = [10, 15, 20, 25];

    let result = arr.filter(num => num >= 20);

    console.log(result);
}


// -----------------------------------------
// reduce()
// -----------------------------------------

// Reduces array to a single value.

{
    let arr = [1, 2, 3, 4];

    let sum = arr.reduce((acc, num) => acc + num, 0);

    console.log(sum);
}


// -----------------------------------------
// reduceRight()
// -----------------------------------------

// Similar to reduce(), but starts from right.

{
    let arr = ["A", "B", "C"];

    console.log(arr.reduceRight((a, b) => a + b));
}


// -----------------------------------------
// find()
// -----------------------------------------

// Returns first matching element.

{
    let arr = [12, 15, 20];

    console.log(arr.find(num => num > 15));
}


// -----------------------------------------
// findIndex()
// -----------------------------------------

// Returns index of first matching element.

{
    let arr = [12, 15, 20];

    console.log(arr.findIndex(num => num > 15));
}


// -----------------------------------------
// some()
// -----------------------------------------

// Returns true if at least one element matches.

{
    let arr = [1, 3, 5, 8];

    console.log(arr.some(num => num % 2 === 0));
}


// -----------------------------------------
// every()
// -----------------------------------------

// Returns true if all elements match.

{
    let arr = [2, 4, 6];

    console.log(arr.every(num => num % 2 === 0));
}


// -----------------------------------------
// flat()
// -----------------------------------------

// Flattens nested arrays.

{
    let arr = [1, [2, [3]]];

    console.log(arr.flat(2));
}


// -----------------------------------------
// flatMap()
// -----------------------------------------

// Performs map() followed by flat().

{
    let arr = [1, 2, 3];

    console.log(arr.flatMap(num => [num, num * 2]));
}


// -----------------------------------------
// keys()
// -----------------------------------------

// Returns an iterator of indexes.

{
    let arr = ["A", "B", "C"];

    console.log([...arr.keys()]);
}


// -----------------------------------------
// values()
// -----------------------------------------

// Returns an iterator of values.

{
    let arr = ["A", "B", "C"];

    console.log([...arr.values()]);
}


// -----------------------------------------
// entries()
// -----------------------------------------

// Returns index-value pairs.

{
    let arr = ["A", "B", "C"];

    console.log([...arr.entries()]);
}


// -----------------------------------------
// Array.isArray()
// -----------------------------------------

// Checks whether a value is an array.

{
    console.log(Array.isArray([1, 2]));
    console.log(Array.isArray("Hello"));
}


// -----------------------------------------
// Array.from()
// -----------------------------------------

// Creates an array from an iterable.

{
    console.log(Array.from("Hello"));
}


// -----------------------------------------
// Array.of()
// -----------------------------------------

// Creates an array from given values.

{
    console.log(Array.of(10, 20, 30));
}


// -----------------------------------------
// Destructuring
// -----------------------------------------

// Extracts values into variables.

{
    let arr = [10, 20, 30];

    let [a, b, c] = arr;

    console.log(a, b, c);
}


// -----------------------------------------
// Spread Operator (...)
// -----------------------------------------

// Expands array elements.

{
    let arr1 = [1, 2];
    let arr2 = [...arr1, 3, 4];

    console.log(arr2);
}


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Prefer map() over loops for transformations.
// ✔ Prefer filter() for filtering data.
// ✔ Use reduce() for aggregations.
// ✔ Remember sort() sorts strings by default.
// ✔ slice() does not modify the array.
// ✔ splice() modifies the original array.
// ✔ Use Array.isArray() instead of typeof.