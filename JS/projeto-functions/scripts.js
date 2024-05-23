const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const whoWin = document.querySelector(".who-win")
const myScore = document.querySelector(".your-score")
const machineScore = document.querySelector(".machine-score")

let tempMyScore = 0
let tempMachineScore = 0

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSOR: "scissor",
}

function playHuman(humanChoice) {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSOR]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        whoWin.innerHTML = "Empatou!"
    }
    else if (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK ||
        human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSOR ||
        human === GAME_OPTIONS.SCISSOR && machine === GAME_OPTIONS.PAPER) {
        whoWin.innerHTML = "Voce ganhou!"
        tempMyScore++
        myScore.innerHTML = tempMyScore
    }
    else {
        whoWin.innerHTML = "Voce perdeu!"
        tempMachineScore++
        machineScore.innerHTML = tempMachineScore
    }
}

rock.addEventListener("click", () => playHuman(GAME_OPTIONS.ROCK))
paper.addEventListener("click", () => playHuman(GAME_OPTIONS.PAPER))
scissor.addEventListener("click", () => playHuman(GAME_OPTIONS.SCISSOR))