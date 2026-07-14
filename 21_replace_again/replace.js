const queries = ["Learning Py", "Learning Java", "Learning CSS", "Learning HTML", "Learning C++"]

function replace(){
    document.getElementById('text').textContent = queries[Math.floor(Math.random() * queries.length)];
}