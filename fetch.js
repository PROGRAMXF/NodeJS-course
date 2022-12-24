/*
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))
*/


//ahora lo hacemos a traves de una funcion con codigo asincrono

async function loadData(){
   const response = await fetch('https://jsonplaceholder.typicode.com/posts')

   //el response lo convertimos a json
   const data = await response.json()
   console.log(data)
}
loadData()