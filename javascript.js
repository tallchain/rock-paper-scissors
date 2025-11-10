//Global Scope
let humanScore = 0
let computerScore = 0
let humanWin = "You win!"
let humanLose = "You lose!!"
let humanTie = "You tie!!!"

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
    let humanChoice = prompt("Which weapon will you take into battle: rock, paper, or scissors?");
    return(((humanChoice.charAt(0)).toUpperCase()) + ((humanChoice.slice(1)).toLowerCase()));
}
getHumanChoice()
