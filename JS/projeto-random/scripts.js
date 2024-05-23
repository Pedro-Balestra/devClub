
const rankButton = document.querySelector(".rank-button")


function rankNumbers() {

    const inputMin = Math.ceil(document.querySelector(".input-min").value)
    const inputMax = Math.floor(document.querySelector(".input-max").value)

    if (inputMin < inputMax) {

        const rankedNumber = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin
        alert(rankedNumber)
    } else {
        alert("Please enter a valid range")
    }
}

rankButton.addEventListener("click", rankNumbers)