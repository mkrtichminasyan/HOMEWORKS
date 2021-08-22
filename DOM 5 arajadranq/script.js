let countDiv = document.getElementById("count")

let fun = () => {
    let body = document.getElementsByTagName("body")[0]
    let randomNum = Math.floor(Math.random() * 99)
    let x = Math.floor(Math.random() * 900)
    let y = Math.floor(Math.random() * 700)
    let newEl = document.createElement("div")
    newEl.classList.add("elem")
    newEl.style.bottom = `${y}px`
    newEl.style.left = `${x}px`
    newEl.innerText = randomNum
    body.appendChild(newEl)
    newEl.addEventListener("click", () => {
        if (countDiv.innerText > 200) {
            countDiv.innerText = 0
        }
        countDiv.innerText = Number(countDiv.innerText) + Number(newEl.innerText)
        newEl.remove()
        fun()
    })
}
count = 0
setInterval(() => {
    if (count < 20) {
        fun()
    }
    count += 1
}, 1000)