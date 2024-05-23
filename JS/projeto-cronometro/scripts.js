const buttonStart = document.querySelector(".button-start")
const buttonStop = document.querySelector(".button-stop")
const buttonReset = document.querySelector(".button-reset")
let cronNumber = document.querySelector('h1')

let cron
let number = 0

function startCron() {
    cron = setInterval(() => {
        number++
        cronNumber.innerHTML = number
    }, 1000);
    buttonStart.disabled = true;
}
function stopCron() {
    clearInterval(cron)
    buttonStart.disabled = false;
}

function resetCron() {
    clearInterval(cron)
    number = 0
    cronNumber.innerHTML = 0
    buttonStart.disabled = false;
}

buttonStart.addEventListener("click", startCron)
buttonStop.addEventListener("click", stopCron)
buttonReset.addEventListener("click", resetCron)
