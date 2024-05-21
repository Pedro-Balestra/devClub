const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

function troqueiDeValor() {
    console.log(`troquei de valor para ${select.value}`)
}

select.addEventListener("change", troqueiDeValor)
