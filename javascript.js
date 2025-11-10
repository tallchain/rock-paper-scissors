//Computer Choice 
function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random()*3))
    if (computerChoice == 0 ) {
        let computerSelection="Rock"
        console.log(computerSelection);
    } else if (computerChoice == 1) {
        let computerSelection="Paper"
        console.log(computerSelection)
    } else {
        let computerSelection="Scissors";
        console.log(computerSelection)
    }
}
getComputerChoice()

//Human Choice
function getHumanChoice() {
    let humanChoice = prompt("Which weapon will you take into battle: rock, paper, or scissors?");
    console.log(((humanChoice.charAt(0)).toUpperCase()) + ((humanChoice.slice(1)).toLowerCase()));
}
getHumanChoice()
