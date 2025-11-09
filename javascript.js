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

getComputerChoice()