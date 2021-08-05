//////////////////////////    JSON
// let user = {
//     name: "Hayk",
//     age: 25,
//     courses: ["html", "css", "javascript"],
//     wife: null
// }
// // alert(user)
// let json = JSON.stringify(user)
// alert(json)
// alert(typeof json)\



// let num = JSON.stringify(3)
// alert(typeof num)

// let bool = JSON.stringify(true)
// alert(typeof bool)

// let arr = JSON.stringify([1, 10, 15])
// alert(typeof arr);


// let room = {
//     number: 23,
// }
// let meetup = {
//     title: "Conference",
//     participants: ["Ann", "Armen"],
// }
// meetup.place = room
// room.occupied = meetup
// console.log(JSON.stringify(meetup));


// let user = {
//     name: "Vahram",
//     surName: "Xachatryan",
//     isAdmin: false
// }
// // let json = JSON.stringify(user, ["name"], 3)
// let json = JSON.stringify(user, null, 3)
// alert(json)


// let numbers = "[0, 1, 2]"
// numbers = JSON.parse(numbers)
// alert(numbers[1])


// let user = '{"name": "John", "age": "25", "wife": "null"}'
// let h = JSON.parse(user)
// console.log(h);



///////////////////      date

// let date = new Date()
// console.log(date);
// console.log(+date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());


// let date = Date.now()
// console.log(date);





// ARAJADRANQ

// let j= '{"Name":"Krishna","Email": "XYZ", "CN": "12345"}'
// j = JSON.parse(j)
// console.log(j);

// let j = {
//     Name:"Krishna",
//     Email: "XYZ", 
//     CN : 12345
// };
// let x = JSON.stringify(j)
// console.log(x);


// destructuring

// let data = [1, 2, 3]
// let [a,  , b, c = 4] = data
// console.log(a, b, c);


// let obj = {
//     f1: "v1",
//     f2: 2,
//     f3: "v3"
// }
// let{f1 = "v1", f2: field2, f4 = "v4"} = obj
// console.log(f1, field2, f4);


// let book = {
//     bookName: "Ալքիմիկոսը",
//     author: "Պաուլո Կոելյո",
//     genre: "վեպ",
//     data: "05/7/2004"
// }
// let{bookName: bookTitle, author: bookAuthor} = book
// document.write(bookTitle + " գիրքը գրվել է " + bookAuthor + "-ի կողմից")

