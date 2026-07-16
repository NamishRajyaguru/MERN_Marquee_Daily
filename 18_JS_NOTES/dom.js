// =========================================
// JavaScript DOM (Document Object Model)
// =========================================


// -----------------------------------------
// What is DOM?
// -----------------------------------------

// DOM (Document Object Model) represents the HTML
// page as a tree of objects.
//
// JavaScript uses the DOM to access, modify,
// create and delete HTML elements.


// -----------------------------------------
// Accessing the Document
// -----------------------------------------

// document represents the entire webpage.

{
    console.log(document);
    console.log(document.title);
    console.log(document.URL);
}


// -----------------------------------------
// Selecting Elements
// -----------------------------------------

// getElementById()
// Selects an element by its id.

{
    let heading = document.getElementById("title");
}


// getElementsByClassName()

// Returns all elements with the given class.

{
    let items = document.getElementsByClassName("item");
}


// getElementsByTagName()

// Returns all elements of a given tag.

{
    let paragraphs = document.getElementsByTagName("p");
}


// querySelector()

// Returns the first matching element.

{
    let element = document.querySelector(".box");
}


// querySelectorAll()

// Returns all matching elements.

{
    let elements = document.querySelectorAll(".box");
}


// -----------------------------------------
// Reading & Changing Content
// -----------------------------------------

// innerHTML
// Gets/Sets HTML content.

{
    let heading = document.getElementById("title");

    heading.innerHTML = "<i>Hello</i>";
}


// innerText
// Gets/Sets visible text only.

{
    let heading = document.getElementById("title");

    heading.innerText = "Welcome";
}


// textContent
// Gets/Sets all text, including hidden text.

{
    let heading = document.getElementById("title");

    heading.textContent = "JavaScript";
}


// -----------------------------------------
// Attributes
// -----------------------------------------

// getAttribute()
// Returns an attribute value.

{
    let img = document.querySelector("img");

    console.log(img.getAttribute("src"));
}


// setAttribute()
// Sets an attribute.

{
    let img = document.querySelector("img");

    img.setAttribute("alt", "Profile");
}


// removeAttribute()
// Removes an attribute.

{
    let img = document.querySelector("img");

    img.removeAttribute("width");
}


// hasAttribute()
// Checks whether an attribute exists.

{
    let img = document.querySelector("img");

    console.log(img.hasAttribute("src"));
}


// -----------------------------------------
// Styling Elements
// -----------------------------------------

// style
// Changes inline CSS.

{
    let heading = document.getElementById("title");

    heading.style.color = "red";
    heading.style.backgroundColor = "yellow";
}


// -----------------------------------------
// classList
// -----------------------------------------

// add()
// Adds a class.

{
    let box = document.querySelector(".box");

    box.classList.add("active");
}


// remove()
// Removes a class.

{
    let box = document.querySelector(".box");

    box.classList.remove("active");
}


// toggle()
// Adds if absent, removes if present.

{
    let box = document.querySelector(".box");

    box.classList.toggle("dark");
}


// contains()
// Checks whether a class exists.

{
    let box = document.querySelector(".box");

    console.log(box.classList.contains("active"));
}


// -----------------------------------------
// Creating Elements
// -----------------------------------------

// createElement()
// Creates a new HTML element.

{
    let para = document.createElement("p");

    para.textContent = "Hello World";
}


// -----------------------------------------
// Adding Elements
// -----------------------------------------

// append()
// Adds at the end.

{
    let container = document.getElementById("container");

    let p = document.createElement("p");

    p.textContent = "New Paragraph";

    container.append(p);
}


// prepend()
// Adds at the beginning.

{
    let container = document.getElementById("container");

    let p = document.createElement("p");

    container.prepend(p);
}


// before()
// Inserts before the element.

{
    let box = document.querySelector(".box");

    box.before(document.createElement("hr"));
}


// after()
// Inserts after the element.

{
    let box = document.querySelector(".box");

    box.after(document.createElement("hr"));
}


// -----------------------------------------
// Removing Elements
// -----------------------------------------

// remove()
// Deletes an element.

{
    let box = document.querySelector(".box");

    box.remove();
}


// removeChild()
// Removes a child from its parent.

{
    let parent = document.getElementById("container");

    let child = parent.firstElementChild;

    parent.removeChild(child);
}


// -----------------------------------------
// Replacing Elements
// -----------------------------------------

// replaceWith()
// Replaces an element.

{
    let oldElem = document.querySelector(".old");

    let newElem = document.createElement("h2");

    newElem.textContent = "New Heading";

    oldElem.replaceWith(newElem);
}


// -----------------------------------------
// Traversing the DOM
// -----------------------------------------

// parentElement
// Returns parent element.

{
    let box = document.querySelector(".box");

    console.log(box.parentElement);
}


// children
// Returns child elements.

{
    let parent = document.getElementById("container");

    console.log(parent.children);
}


// firstElementChild

{
    let parent = document.getElementById("container");

    console.log(parent.firstElementChild);
}


// lastElementChild

{
    let parent = document.getElementById("container");

    console.log(parent.lastElementChild);
}


// nextElementSibling

{
    let item = document.querySelector(".item");

    console.log(item.nextElementSibling);
}


// previousElementSibling

{
    let item = document.querySelector(".item");

    console.log(item.previousElementSibling);
}


// -----------------------------------------
// Events
// -----------------------------------------

// addEventListener()
// Executes a function when an event occurs.

{
    let btn = document.getElementById("btn");

    btn.addEventListener("click", function () {
        console.log("Button Clicked");
    });
}


// Common Events

// click
// dblclick
// mouseover
// mouseout
// keydown
// keyup
// input
// change
// submit
// focus
// blur


// -----------------------------------------
// Event Object
// -----------------------------------------

// Event object contains information
// about the triggered event.

{
    let btn = document.getElementById("btn");

    btn.addEventListener("click", function (event) {
        console.log(event.target);
    });
}


// -----------------------------------------
// Prevent Default
// -----------------------------------------

// Prevents default browser behavior.

{
    let form = document.querySelector("form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        console.log("Form Submitted");
    });
}


// -----------------------------------------
// Best Practices
// -----------------------------------------

// ✔ Prefer querySelector() and querySelectorAll().
// ✔ Use addEventListener() instead of inline events.
// ✔ Minimize direct style changes; prefer CSS classes.
// ✔ Cache frequently used DOM elements.
// ✔ Avoid excessive DOM manipulation inside loops.


// =========================================
// End of Notes
// =========================================