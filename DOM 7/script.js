// Array
// function
// object
// DOM
// RegExp


// pendung, fulfiled, rejected

// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("done"), 1000)
// })
// promise.then(
//     (result) => console.log(result),
//     (error) => console.error(error)
// )

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Oops")), 1500)
// })
// promise.catch(console.log)

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("result"), 2000)
// })
// .finally(() => console.log("Promise result"))
// .then((result) => console.log(result))

// function getData(t){
//     return new Promise(function(resolve, reject){
//         setTimeout(() => resolve(t), 2000)
//     })
// }
// getData(10)
// .then((num) => {
//     console.log("Promise 1 call", num);
//     return getData(num + 20)
// })
// .then((num) => {
//     console.log("Promise 2 call", num);
//     aaa()
//     return getData(num + 30)
// })
// .then((num) => {
//     console.log("Promise 3 call", num);
//     return getData(num)
// })
// .catch((err) => console.log(err))
// console.log("Bottom code");


// Promise.all([
//     new Promise((resolve) => {
//         setTimeout(() => resolve(1), 3000)
//     }),
//     new Promise((resolve) => {
//         setTimeout(() => resolve(2), 2000)
//     }),
//     new Promise((resolve) => {
//         setTimeout(() => resolve(3), 1000)
//     })
// ])   

//Arajadranq

// function x(n) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (n % 2 === 1) {
//                 resolve("even number")
//             } else {
//                 reject(new Error("odd number"))
//             }
//         }, 1500)
//     })
//     .then((resolve) => {
//         console.log(resolve);
//     })
//     .catch(err => console.log(err.message))
// }
// let num = prompt()
// x(num)

// function dubl(e) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(e * 2), 1500)
//     })
//     .then((value) => {
//         console.log(value);
//     })
// }
// let x = prompt()
// dubl(x)