//------fetch-----
//https://jsonplaceholder.typicode.com/

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then(data => console.log(data))
//---get harcum


// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.text())
//     .then(data => console.log(data))


// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.arrayBuffer())
//     .then(data => console.log(data))


// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.blob())
//     .then(data => console.log(data))


// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then(data => console.log(data))


// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method: "POST",
//     body:JSON.stringify({
//         title:"hello",
//         body:"bar",
//         userId:1
//     }),
//     headers:{
//         "Content-type":"application/json;Charset=UTF-8",
//     }
// })

// .then(response => response.json())
// .then(data => console.log(data))


// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method: "PUT",
//     body:JSON.stringify({
//         id:1,
//         title:"hello",
//         body:"bar",
//         userId:1
//     }),
//     headers:{
//         "Content-type":"application/json;Charset=UTF-8",
//     }
// })

// .then(response => response.json())
// .then(data => console.log(data))



// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method:"DELETE"
// })
// .then(response => response.json())
// .then(data => console.log(data))


// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
// .then(response => response.json())
// .then(data => console.log(data))

//Arajadranq

// let div = document.getElementsByTagName("div")[0]
// fetch("https://corona-api.com/countries/am")
//     .then((response) => response.json())
//     .then((json) => {
//         div.innerHTML = json.data.today.confirmed
//     })


// let input = document.getElementsByTagName("input")[0]
// let button = document.getElementsByTagName("button")[0]
// let paragraph = document.getElementsByTagName("p")[0]

// button.addEventListener("click", function () {
//     if (!input.value) {
//         return alert("lracreq dasht@")
//     }
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((data) => {
//             const userExist = data.find(item => item.name === input.value)
//             if (userExist) {
//                 paragraph.innerText = userExist.email
//             } else {
//                 alert("Տվյալ անունով user չի գտնվել")
//             }
//         })
// })

let input = document.getElementsByTagName("input")[0]
let button = document.getElementsByTagName("button")[0]
let paragraph = document.getElementsByTagName("p")[0]
let div = document.getElementsByTagName("div")[0]

button.addEventListener("click", function () {
    if (!input.value) {
        return alert("lracreq dasht@")
    }
    fetch("http://api.tvmaze.com/search/shows?q=Titanik")
    .then((response) => response.json())
    .then((data) => console.log(data))
})