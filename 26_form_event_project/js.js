const form = document.getElementById('form')
const studentList = document.getElementById('output')


const users = []


form.addEventListener('submit',function(e){
  e.preventDefault();

    const user = {
    name : document.getElementById('name').value,
    age : document.getElementById('age').value,
    email : document.getElementById('email').value
  }


  users.push(user)
  console.log(users)

  studentList.innerHTML = ''
  users.forEach(function(student){
    studentList.innerHTML += `
    <li>
      ${student.name} | 
      ${student.age} |
      ${student.email}
    </li>
    `
  })

  form.reset()
})