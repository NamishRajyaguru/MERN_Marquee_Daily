// submit
// const form = document.getElementById('form')
// const output = document.getElementById('output')

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     let name = document.getElementById('name').value
//     output.innerText = "Welcome " + name
// })

// input
// const box = document.getElementById('box')
// box.addEventListener('input', ()=>{
//     console.log(box.value)
//     document.getElementById('result').innerText = box.value
// })

// change
// const box = document.getElementById('box')
// box.addEventListener('change', ()=>{
//     console.log(box.value)
//     document.getElementById('result').innerText = box.value
// })

// focus
// const box = document.getElementById('box')
// box.addEventListener('focus', ()=>{
//     console.log(box.value)
//     box.style.background = "yellow"
// })

// blur
// const box = document.getElementById('box')
// box.addEventListener('blur', ()=>{
//     box.style.background = "black"
// })

// invalid
// const name = document.getElementById('name')
// name.addEventListener('invalid', (e)=>{
//     e.preventDefault()
//     alert("Name is required")
// })

// select
document.getElementById('input').addEventListener('select', ()=>{
    alert("text selected")
})