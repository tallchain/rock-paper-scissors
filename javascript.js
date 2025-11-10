//Computer Choice 
function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random()*3))
    if (computerChoice == 0 ) {
        console.log("Rock");
    } else if (computerChoice == 1) {
        console.log("Paper");
    } else {console.log("Scissors");
    }
}
getComputerChoice()

//Human Choice
function getHumanChoice() {
    let choice = prompt("Which weapon will you take into battle: rock, paper, or scissors?");
    console.log(((choice.charAt(0)).toUpperCase()) + ((choice.slice(1)).toLowerCase()));
}
getHumanChoice()
