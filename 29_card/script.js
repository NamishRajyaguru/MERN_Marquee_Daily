const container = document.getElementById('container')
const result = document.getElementById('result')

// Update student count
function updateCount(){
    result.innerText = "Total Students : " + container.children.length
}

updateCount()

// Delete card
const deleteButtons = document.querySelectorAll('.deleteBtn')

for(let button of deleteButtons){
    button.addEventListener('click', function(){
        this.closest('.card').remove()
        updateCount()
    })
}

// Favorite card
const favCard = document.querySelectorAll('.favoriteBtn')

for(let button of favCard){
    button.addEventListener('click', function(){
        this.closest('.card').classList.toggle('fav')
    })
}

// Next student
// nextelementssibling
const nextBtn = document.querySelectorAll('.nextBtn')

for (let button of nextBtn){
    button.addEventListener('click', function(){
        let currCard = this.closest('.card')
        let nextCard = currCard.nextElementSibling

        if(nextCard){
            alert("Next Student : " + nextCard.children[0].innerText)
        }
        else{
            alert("No next student")
        }
    })
}

// Previous student
// previouselementssibling
const prevBtn = document.querySelectorAll('.prevBtn')

for (let button of prevBtn){
    button.addEventListener('click', function(){
        let currCard = this.closest('.card')
        let prevCard = currCard.previousElementSibling

        if(prevCard){
            alert("Previous Student : " + prevCard.children[0].innerText)
        }
        else{
            alert("No previous student")
        }
    })
}

// First student
// firstelementchild
const firstBtn = document.getElementById('firstBtn')
firstBtn.addEventListener('click', function(){
    let firstCard = container.firstElementChild
    if(firstCard){
        alert("First Student : " + firstCard.children[0].innerText)
    }
    else{
        alert("No student available")
    }
})

// Last student
// lastelementchild
const lastBtn = document.getElementById('lastBtn')
lastBtn.addEventListener('click', function(){
    let lastCard = container.lastElementChild
    if(lastCard){
        alert("Last Student : " + lastCard.children[0].innerText)
    }
    else{
        alert("No student available")
    }
})

// Highlight All
const highlightBtn = document.getElementById('highlightBtn')
highlightBtn.addEventListener('click', function(){
    for(let card of container.children){
        card.classList.add('fav')
    }
})

// Reset
const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', function(){
    for(let card of container.children){
        card.classList.remove('fav')
    }
})

// Total Students
const countBtn = document.getElementById('countBtn')
countBtn.addEventListener('click', function(){
    updateCount()
    alert("Total Students : " + container.children.length)
})