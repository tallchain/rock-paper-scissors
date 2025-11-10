//Global Scope
let humanScore = 0
let computerScore = 0
let humanWin = "You win!!!"
let humanLose = "You lose!!!"
let humanTie = "You tie!!!"
let i = 0
//Computer Choice 
function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random()*3))
    if (computerChoice == 0 ) {
        let computerChoice="Rock"
        return computerChoice;
    } else if (computerChoice == 1) {
        let computerChoice="Paper"
        return computerChoice
    } else {
        let computerChoice="Scissors";
        return computerChoice
    }
}
//Human Choice
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors BATTLE START!!!");
    return(((humanChoice.charAt(0)).toUpperCase()) + ((humanChoice.slice(1)).toLowerCase()));
}
//Play
function playRound(humanChoice, computerChoice) {   
    //tie
    if (humanChoice === computerChoice) {
        console.log(humanTie)}

    //if human rock, pc scissors(
    //win
    else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log(humanWin)}

    //if human rock, pc paper
    //lose
    else if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log(humanLose)}
    //if human paper, pc rock
    //win
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log(humanWin)}

    //if human paper, pc scissors
    //lose
    else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log(humanLose)}

    //if human scissors, pc paper
    //win
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log(humanWin)}
                
    //if human scissors, pc rock
    //lose
    else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log(humanLose)};

    //if player win = +1
}

function updateCount () {
    if (playRound == humanWin) {
        console.log("h gets " + (+humanScore + ++i));
    } else {console.log("pc gets " + (+computerScore + ++i));}
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)

console.log(humanSelection)
console.log(computerSelection)
updateCount()