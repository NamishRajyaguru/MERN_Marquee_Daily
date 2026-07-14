const queries = ["Replace1", "Replace2", "Replace3", "Replace4", "Replace5"]

function replace(){
    document.getElementById('text').textContent = queries[Math.floor(Math.random() * queries.length)];
}