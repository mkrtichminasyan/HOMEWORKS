//...1...

// function x(a){
//     return a*a
// }
// console.log(x(5));

// function x(a, b){
//     return a + b
// }
// console.log(x(4, 5));

// function x(a, b, c){
//     return (a - b)/c
// }
// console.log(x(8, 2, 3));

//...2...

// function num(a){
//     if(a < 0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(num(-5));


//...3...

// let arr = [64,49,36,25,15]

// arr = arr.map((item)=>{
//     return Math.sqrt(item)
// })
// console.log(arr);

// function sqrt (a){
//     for(let i = 0; i < a.length; i++){
//         console.log(Math.sqrt(a[i]));        
//     }
// }
// sqrt(arr);


//...4...

// let count = []
// function arrFill(a, n){
//     for(let i = 0; i < n; i++){
//         count.push(a);
//     }
//     console.log(count);
// }
// arrFill(prompt(), 5)



//...5...

// let arr = [1, 2, 3, 4, 5]
// let x = 10 - arr.length
// console.log(x + 1);


//...6...

// let count = []
// function x(n){
//     for(let i = 1; i <= n; i++){
//         count.push("x".repeat(i))
//     }
//     console.log(count);
// }
// x(5)


//...7...

// var arr = [5, 6, 7, 8, 9]
// let count = []
// arr.forEach(el => count.push(Math.pow(el, 2)))
// console.log(count);


//...8...

// var arr = [5, 6, 7, 8, 9]
// let count = 0
// arr.forEach(el => {
//     count += el
// })
// console.log(count);


//...9...

// var arr = [5, 6, 7, 8, 9]
// let count = []
// arr.map(el => count.push(Math.pow(el, 2)))
// console.log(count);

//...10...

// var arr = [5, 6, 7, 8, 9]
// let positive = el => el > 0
// console.log(arr.every(positive));


//...11...

// var arr = [5, 6, -7, 8, 9]
// let negative = el => el < 0
// console.log(arr.some(negative));


//...12...

// var arr = [1, -3, 5, 6, -7, 8, 9, -11]
// let x = arr.filter(el => el > 0)
// console.log(x);

//...13...

// var arr = [1, -3, 5, 6, -7, 8, 9, -11]
// let x = arr.filter(el => el % 2 === 0)
// console.log(x);


//...14...
// var arr = [1, 2, 3, 0, 4, 5, 6]

// const reducer = (a, b) => a + b;
// console.log(arr.reduce(reducer))


//...15...

// let myArray = [1, 2, 3, 4, 0, 5, 6]
// let x = myArray.reduce(function (a, b) {
//     if (b == 0) {
//         console.log(a);
//     }else{
//         return a + b
//     }
// })