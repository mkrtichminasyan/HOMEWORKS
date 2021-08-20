// let div = document.createElement("div")
// div.innerHTML = "Creat"
// document.body.append(div)// dnum e pakvox tegic araj
// let p = document.createElement("p")
// p.innerHTML = "text"
// div.prepend(p)// dnum e bacvox tagic heto
// let span = document.createElement("span")
// span.innerHTML = " before"
// document.body.insertBefore(span, div)//span-@ dnum enq div-ic araj


// let div = document.getElementsByTagName("div")[0]
// div.remove()


// setInterval(function(a){
//     console.log(a);
//     console.log("interval");
// }, 3000, 8)


// let c = setInterval(function(){
//     console.log("clear");
//     clearInterval(c)
// }, 1500)

// setTimeout(function(){
//     console.log("time");
// }, 2000)


//Arajadranq

//???????????????????????????
// let light = document.getElementsByClassName("colors")
// let lightColors = ["red", "yellow", "green"]
// let activLight = 0
// setInterval(function () {
//     for (let i = 0; i < light.length; i++) {
//         if (light[i].style.background === "red") {
//             light[i].nextElementSibling.style.background = lightColors[i + 1]
//             light[i].style.background = "darkgray"
//         }
//     }
// }, 2000);

//?????????????????????????
// let light = document.getElementsByClassName("colors")
// let colors = ["red", "yellow", "green"]
// let activColor = 0
// function changeColors() {
//     activColor++
//     if (activColor > light.length) {
//         activColor = 0
//     }
//     light[activColor].style.background = colors[activColor]
//     light[activColor].style.background = "darkgray"
// }
// setInterval(changeColors, 2000);
// changeColors()


//CHISHT@
let light = document.getElementsByClassName("colors")
let lightColor = ["red", "yellow", "green"]

setInterval(function () {
    light[0].style.background = lightColor[0]
    light[1].style.background = "darkgray"
    light[2].style.background = "darkgray"
    setTimeout(() => {
        light[1].style.background = lightColor[1]
    }, 2000)
    setTimeout(() => {
        light[0].style.background = "darkgray"
        light[1].style.background = "darkgray"
        light[2].style.background = lightColor[2]
    }, 4000)
    setTimeout(() => {
        light[1].style.background = lightColor[1]
        light[2].style.background = "darkgray"
    }, 7000)
}, 9000)
