// let btn = document.getElementById("btn")
// let img = document.getElementsByTagName("img")[0]
// let link = document.getElementsByTagName("a")[0]

// btn.addEventListener("click", function(){
//     img.src = "images.jpg"
//     link.href = "https://www.w3schools.com/"
//     link.innerHTML = "W3School"
// })


// let inp = document.getElementsByTagName("input")[0]
// let btn = document.getElementById("btn")
// inp.addEventListener("keyup", function(e){
//     console.log(e.which);
// })

// inp.addEventListener("keyup", function(e){
//     if(e.which !== 13)return;
//     console.log(this.value);
// })



// let div = document.getElementsByTagName("div")[0]
// div.classList.add("a", "b")//div-in class enq tali
// div.classList.remove("b")//div-i classneric nshvac@ jnjum e
// div.classList.toggle("c")//ete chka "c" class@,avelacnum e,ete ka,jnjum e
// console.log(div.classList.contains("a"));//stugum e,ete ka - true,ete che - false

// let main = document.getElementsByTagName("main")[0]
// let span = document.getElementsByTagName("span")[0]
// let parent = span.parentNode//spani parent tag@
// // console.log(parent);
// // console.log(parent.firstElementChild);
// // console.log(parent.lastElementChild);
// // console.log(parent.children[1]);

// console.log(span.nextElementSibling);
// console.log(span.previousElementSibling);
// console.log(main.innerHTML);
// console.log(main.innerText);
// console.log(main.textContent);


// const obj = {
//     doc: function(){
//         return document.getElementsByTagName("input")[0]
//     }
// }
// console.log(obj.doc());


//Arajadranq    

// let name = document.getElementsByTagName("input")[0]
// let surname = document.getElementsByTagName("input")[1]
// let btn = document.getElementsByTagName("button")[0]
// let ul = document.getElementsByTagName("ul")[0]
// let reg = /\D/g
// btn.addEventListener("click", function () {
//     if (reg.test(name.value) && reg.test(surname.value)) {
//         let li = document.createElement("li")
//         li.innerText = `${name.value} ${surname.value}`
//         ul.appendChild(li)
//         name.value = ""
//         surname.value = ""
//     }
//     else {
//         alert("Պարտադիր լրացնել բոլոր դաշտերը")
//     }
// })


let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let next1 = document.getElementById("next-1")
let next2 = document.getElementById("next-2")
let prev1 = document.getElementById("prev-1")
let prev2 = document.getElementById("prev-2")

next1.addEventListener("click", function(){
    if(!one.innerText)return
    two.innerText = one.innerText
    one.innerText = ""  
})

next2.addEventListener("click", function(){
    if(!two.innerText)return
    three.innerText = two.innerText
    two.innerText = ""  
})

prev1.addEventListener("click", function(){
    if(!two.innerText)return
    one.innerText = two.innerText
    two.innerText = ""  
})

prev2.addEventListener("click", function(){
    if(!three.innerText)return
    two.innerText = three.innerText
    three.innerText = ""  
})