//Global Scope
let humanScore = 0
let computerScore = 0
let humanWin = "You win!!!"
let humanLose = "You lose!!!"
let humanTie = "You tie!!!"

function playGame()
{//Computer Choice 
function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random()*3))
    if (computerChoice == 0 ) {
        return "Rock";
    } else if (computerChoice == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
//Human Choice
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors BATTLE START!!!");
    return(((humanChoice.charAt(0)).toUpperCase()) + ((humanChoice.slice(1)).toLowerCase()));
}
//Play
function playRound(humanChoice, computerChoice) {   
    if (humanChoice === computerChoice) {
    return humanTie}
    else if (humanChoice == "Rock" && computerChoice == "Scissors" 
        || humanChoice == "Paper" && computerChoice == "Rock"
        || humanChoice == "Scissors" && computerChoice == "Paper") {
    return humanWin}
    else (humanChoice == "Rock" && computerChoice == "Paper"
        || humanChoice == "Paper" && computerChoice == "Scissors"
        || humanChoice == "Scissors" && computerChoice == "Rock"); {
    return humanLose}
}
//Execution
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);
console.log(result)
console.log(humanSelection)
console.log(computerSelection)
updateCount()

//executes playRound
playRound(humanSelection, computerSelection)

function updateCount () {
    if (result == humanWin) {
        console.log("h now has " + (++humanScore));
    } else if (result == humanLose) {console.log("pc now has " + (++computerScore));
    } else {console.log("NO ONE gets a point :(")};
}}
function winner() {
    if (humanScore > computerScore) {
        console.log("You had more points! You win!");
    } else {
        console.log("The computer had more points. You lost!");
    }
}
for (let i = 0; i < 5; i++) {
    playGame()}
winner();