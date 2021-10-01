// let div = document.getElementsByTagName('div')[0];
// class Clock {
//     constructor(h, m, s) {
//         this.h = h;
//         this.m = m;
//         this.s = s;
//     }
//     hb() {
//         this.s++;
//         if (this.s === 60) {
//             this.m++;
//             this.s = 0;
//         }
//         if (this.m === 60) {
//             this.h++;
//             this.m = 0;
//         }
//         if (this.h === 24) {
//             this.h = 0;
//         }
//         div.innerHTML = ((this.h < 10) ? `0${this.h}` : this.h) + ':' + ((this.m < 10) ? `0${this.m}` : this.m) + ':' + ((this.s < 10) ? `0${this.s}` : this.s);

//     }
// }
// let obj = new Clock(14, 41, 5);
// setInterval(function () {
//     obj.hb();
// }, 1000)





//.....class jarangum.....


// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     toString(){
//         return this.name
//     }
// }
// //Cat@ jarangum e Animal-ic
// class Cat extends Animal{
//     constructor(name,age){
//         super(name)
//         this.age = age
//     }
//     toString(){
//         return "cat name " + super.toString()
//     }
// }

// const cat = new Cat("M", 4)
// alert(cat)
// // console.log(cat);



// const a = {
//     name:"Joe"
// }

// const b = {
//     lastName:"Jackson"
// }

// a.__proto__ = b
// console.log(a.name);
// console.log(a.lastName);

// const c = {
//     age:9,
//     showAge(){
//         alert(this.age)
//     }
// }

// b.__proto__ = c

// a.showAge()
// // console.log(a.age);



//......Object create.....

// const b = {
//     lastName:"Avagyan"
// }

// const a = Object.create(b)
// a.lastName =  "Petrosyan"
// console.log(a.lastName);


//......KRKNUTYUN........

//.....1.....

// var num = 1
// num += 12
// num -= 14
// num *= 5
// num += 1
// num -= 1
// alert(num)


//...2...

// let str1 = "Hello"
// let str2 = "World"

// let fullSrt = str1 + " " + str2
// console.log(fullSrt);


//...3...

// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(225));
// console.log(Math.max(5,7,10,-9,41));
// console.log(Math.min(5,7,10,-9,41));
// console.log(Math.min(5,7,10,-9,41));
// console.log(Math.abs(-9))
// console.log(Math.floor(10.3))
// console.log(Math.round(10.3))
// console.log(Math.ceil(10.3))


//...4...

// var arr=[2,5,3,9];
// var result = (arr[0] * arr[1])*(arr[2]*arr[3])
// alert(result)



//...5...

// let a = 5
// let b = (a>0)? true: false
// console.log(b);


//...6...

// let a = 30
// if(a == 0 || a == 2){
//     alert(a+7)
// }else(
//     alert(a/10)
// )


//...7...

// let a = 1
// let b = 7
// if(a <= 1 && b >= 3){
//     alert(a+b)
// }else{
//     alert(a-b)
// }


//...8...


// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 6; j++) {
//         if (i = j) {
//             document.write('x'.repeat(i))
//             document.write('<br>')
//         }
//     }
// }


//...10...

// let arr1 = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]
// let arr = arr1.concat(arr2)
// console.log(arr);

// let arr1 = [1, 2, 3, 4]
// console.log(arr1.reverse());

// let arr1 = [1, 2, 3, 4]
// arr1.push(4, 5, 6)
// console.log(arr1);

// let arr1 = [1, 2, 3, 4]
// arr1.unshift(3, 7, 8)
// console.log(arr1);

// let arr1 = [1, 2, 3, 4]
// arr1.shift()
// console.log(arr1);

// let arr1 = [1, 2, 3, 4]
// arr1.pop()
// console.log(arr1);


//...11...

// let obj = {
//     Արամ: 200,
//     Արսեն: 300,
//     Աշոտ: 400
// }
// for(let i in obj){
//     document.write(`${i}ը ստանում է ${obj[i]} աշխատավարձ`)
//     document.write("<br>")
// }


//...12...

// var str='I am learning javascript!';
// let x = str.split(" ")
// console.log(x);

// var str='I am learning javascript!';
// let x = str.split("")
// console.log(x);


//...13...

// var arr=['I', 'learn', 'javascript', '!'];
// let x = arr.join()
// console.log(x);


//...14...

// let arr = ['elem1', 'elem2', 'elem3']
// arr.reverse()
// for(let i of arr){
//     console.log(i);
// }


//...15...

// let str = 'You want the webserver to support four of the most popular programming paradigms.'
// let count = 0
// for(let i of str){
//     if(i == "o"){
//         count++
//     }
// }
// console.log(count);