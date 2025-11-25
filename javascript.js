//Global Scope
let humanScore = 0
let computerScore = 0
let humanWin = "You win!!!"
let humanLose = "You lose!!!"
let humanTie = "You tie!!!"
const score = document.querySelector(".score")
const buttonR = document.querySelector(".rock")
const buttonP = document.querySelector(".paper")
const buttonS = document.querySelector(".scissors")
buttonR.addEventListener("click", () => {humanChoice = "Rock";
playGame()})
buttonP.addEventListener("click", () => {humanChoice = "Paper";
playGame()})
buttonS.addEventListener("click", () => {humanChoice = "Scissors";
playGame()})

function playGame()
{//Computer Choice 
function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random()*3))
    if (computerChoice == 0 ) {
        return "Rock";} 
    else if (computerChoice == 1) {
        return "Paper"} 
    else {
        return "Scissors"
    }
}

//Play
function playRound(humanChoice, computerChoice) {   
    if (humanChoice === computerChoice) {
        return humanTie}
    else if (humanChoice == "Rock" && computerChoice == "Scissors" 
        || humanChoice == "Paper" && computerChoice == "Rock"
        || humanChoice == "Scissors" && computerChoice == "Paper") {
            ++humanScore;
        return humanWin}
    else (humanChoice == "Rock" && computerChoice == "Paper"
        || humanChoice == "Paper" && computerChoice == "Scissors"
        || humanChoice == "Scissors" && computerChoice == "Rock"); {
            ++computerScore;
    return humanLose}
}
//Score Count
const humanSelection = humanChoice;
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);
console.log(result)
console.log(`human: ${humanSelection}`)
console.log(`computer: ${computerSelection}`)
updateCount()

function updateCount () {
        score.textContent = `Human: ${(humanScore)} Computer: ${computerScore}`;
}
function winner() {
    if (humanScore > computerScore) {
        console.log("You had more points! You win!");
    } else if (humanScore < computerScore) {
        console.log("The computer had more points. You lost!");}
        else { console.log("It's a tie!")
        }
    }
winner();
}