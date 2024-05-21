const input = document.querySelector("#main-input")
const desafio = document.querySelector(".desafio")

function cliqueiNoBotao() {
    desafio.innerHTML = `O valor digitado foi: ${input.value}`
}

function digiteiNoInput() {
    console.log(input.value)
}