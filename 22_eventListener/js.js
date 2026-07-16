const btn = document.querySelector("#myBtn");
const heading = document.querySelector("#heading");

// function handleClickButton(){
//     heading.textContent = "Button Clicked !!"
//     heading.style.color = "red"
//     console.log("User clicked button")
// }

// btn.addEventListener('dblclick', function(){
//     alert("Double Clicked")
// })

const box = document.querySelector("#box")
// box.addEventListener("mousemove", function(e){
//     console.log(e)
// })
// box.addEventListener("mouseenter", function(){
//     console.log("Mouse Entered")
// })
// box.addEventListener("mouseover", function(){
//     console.log("Mouse Over")
// })
document.addEventListener("keydown", function(e){
    console.log(e.key)
})