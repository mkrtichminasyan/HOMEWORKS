// Arajdranq 
// let div = document.getElementById("a")
// setInterval(function () {
//     let data = new Date()

//     let d = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate();
//     let m = data.getMonth() < 10 ? `0${data.getMonth()}` : data.getMonth();
//     let y = data.getFullYear() < 10 ? `0${data.getFullYear()}` : data.getFullYear();

//     div.innerHTML = `${d} / ${m} / ${y}`
// }, 1000)


// let date = new Date
// let f = (i)=>{
//     let d = date.getDate()
//     let m = date.getMonth()
//     let y =  date.getFullYear()
//     return y - i
// }
// console.log(f(1992));


// let monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// let date = new Date()
// let f = (i)=>{
//     let d = date.getDate()
//     let m = date.getMonth()
//     let y =  date.getFullYear()
//     console.log(monthNames[m]);    
// }
// f();
// //kam
// let date = new Date()
// let monthName = date.toLocaleString('en-us', { month: 'long' })
// console.log(monthName);


// let data = new Date()
// let day = function () {
//     let d = data.getDay() === 0 || data.getDay() === 6 ? "weekend" : "working day"
//     return d
// }
// console.log(day());


// let data = new Date()
// let time = ()=>{
//     let h = data.getHours() > 12 ? "pm" : "am";
//     return h
// }
// console.log(time());