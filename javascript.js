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
    return humanTie}

    //if human rock, pc scissors(
    //win
    else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    return humanWin}

    //if human rock, pc paper
    //lose
    else if (humanChoice == "Rock" && computerChoice == "Paper") {
    return humanLose}
    //if human paper, pc rock
    //win
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
    return humanWin}

    //if human paper, pc scissors
    //lose
    else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    return humanLose}

    //if human scissors, pc paper
    //win
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        return humanWin}
                
    //if human scissors, pc rock
    //lose
    else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        return humanLose};

    //if player win = +1
}

function updateCount () {
    if (result == humanWin) {
        console.log("h gets " + (+humanScore + ++i));
    } else if (result == humanLose) {console.log("pc gets " + (+computerScore + ++i));
    } else {console.log("NO ONE gets a point :(")};
    }

//Execution
//asks human choice and stores in humanSelection
const humanSelection = getHumanChoice();
//asks computer choice
const computerSelection = getComputerChoice();
//executes playRound function with following params
playRound(humanSelection, computerSelection)

//makes playround(params) return into result var
const result = playRound(humanSelection, computerSelection);
//displays result in console
console.log(result)
//displays human choice
console.log(humanSelection)
//displays computer choice
console.log(computerSelection)
//adds to score
updateCount()

