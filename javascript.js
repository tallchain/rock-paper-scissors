//Computer Choice 
function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random()*3))
    if (computerChoice == 0 ) {
        console.log("rock");
    } else if (computerChoice == 1) {
        console.log("paper");
    } else {console.log("scissors");
    }
}
getComputerChoice()

//Human Choice
function getHumanChoice() {
    let choice = prompt("Which weapon will you take into battle: rock, paper, or scissors?")
    console.log(choice)
}
getHumanChoice()
