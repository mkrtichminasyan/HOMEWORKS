//..1..

// let name = "Գրիգոր՝ 1254-5687-4559-0015, Մարիամ՝ 1120-4475-5559-1566, Արմեն՝ 7855-2114-3354-5641"
// let reg = /\d{4}\-\d{4}\-\d{4}\-\d{4}/g;
// let num = name.match(reg);
// let result = num.filter((item => item.match(/0/))) //???
// console.log(result);


//..2..

// let arr=[1,0,9,8,4,0,0,2,7,0,6,0];
// let count = 0
// function x(a){
//     for(let i = 0; i < a.length; i++){
//         if(a[i] !== 0){
//             a[count++] = a[i]
//         }
//     }
//     for(let i = count; i < a.length; i++){
//         a[i] = 0
//     }
//     return a
// }
// console.log(x(arr));


//..3..

// for(i=0; i<5; i++){
//     for(j=0;j<=i;j++){
//         document.write("x")
//     }
//     document.write("<br>")
// }

//..4..

// let x = {
//     Hawaii: 100,
//     Dubai: 200,
//     Batumi: 300
// }
// let people = 2
// let day = 3

// for(el in x){
//     document.write(`${people} hogi ${day} orum ${el}-um hangstanalu hamar kcaxsi ${people*day*x[el]} gumar`)
//     document.write("<br>")
// }

//..5..
// ????????????
// let one = document.getElementById("one")
// let two = document.getElementById("two")
// let btn = document.getElementsByTagName("button")

// btn.addEventListener("click", function(){
//     if(one.value < 10 && one.value >= 0){
        
//     }
    
// })