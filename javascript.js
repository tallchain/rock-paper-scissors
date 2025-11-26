//Global Scope
let humanScore = 0
let computerScore = 0
const score = document.querySelector(".score")
const finalResult = document.querySelector(".finalResult")
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
    if (humanChoice === computerChoice){}
    else if (humanChoice == "Rock" && computerChoice == "Scissors" 
        || humanChoice == "Paper" && computerChoice == "Rock"
        || humanChoice == "Scissors" && computerChoice == "Paper") {
            ++humanScore;}
    else (humanChoice == "Rock" && computerChoice == "Paper"
        || humanChoice == "Paper" && computerChoice == "Scissors"
        || humanChoice == "Scissors" && computerChoice == "Rock"); {
            ++computerScore;}
}
const computerSelection = getComputerChoice();
playRound(humanChoice, computerSelection);
//Scores
updateCount()
function updateCount () {
        score.textContent = `Human: ${(humanScore)} Computer: ${computerScore}`;
    }
if (humanScore == 5 || computerScore == 5) {
    winner()
    }
}
function winner() {
    if (humanScore > computerScore) {
        finalResult.textContent = "You had 5 points first! You win!";
    } else if (humanScore < computerScore) {
        finalResult.textContent = "The computer reached 5 points first. You lost!";}
        else {finalResult.textContent = "It's a tie!"
        }
    }
