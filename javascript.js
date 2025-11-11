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

}


//Execution
//asks human choice and stores in humanSelection
const humanSelection = getHumanChoice();
//asks computer choice
const computerSelection = getComputerChoice();
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

//executes playRound
playRound(humanSelection, computerSelection)
function updateCount () {
    if (result == humanWin) {
        console.log("h now has " + (++humanScore));
    } else if (result == humanLose) {console.log("pc now has " + (++computerScore));
    } else {console.log("NO ONE gets a point :(")};
}}
function winner() {
    if (humanScore == computerScore) {
        console.log("You both had the same number of points!");
    } else if (humanScore > computerScore) {
        console.log("You had more points! You win!");
    } else {
        console.log("The computer had more points. You lost!");
    }
}
for (let i = 0; i < 5; i++) {
    playGame()}
winner();