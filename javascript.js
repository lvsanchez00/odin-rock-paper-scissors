console.clear();




function playGame() {
    
    function getComputerChoice() {
        let computerChoice;
        randomizer = Math.floor(Math.random() * 3);
        if (randomizer === 0) {
            computerChoice = "rock";
        }
        else if (randomizer === 1) {
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors";
        }
        return computerChoice; 
    }
    
    function getHumanChoice () {
        let humanChoice = window.prompt("Please choose rock, paper or scissors","rock");
        return humanChoice.toLowerCase();
    }
    
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {

    
        if (humanChoice === computerChoice) {
            console.log("It's a tie, play round again.");
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("Paper beats rock. Computer won this round.");
            computerScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("Rock beats scissors. Human won this round.");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("Scissors beat paper. Computer won this round.");
            computerScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("Paper beats rock. Human won this round.");
            humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("Rock beats scissors. Computer won this round.");
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("Scissors beat paper. Human won this round.");
            humanScore++;
        }

        console.log("Computer score: ", computerScore);
        console.log("Human score: ", humanScore);
        console.log("");
    
    }

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log("Computer: ", computerSelection);
    console.log("Human: ", humanSelection);
    playRound (humanSelection, computerSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log("Computer: ", computerSelection);
    console.log("Human: ", humanSelection);
    playRound (humanSelection, computerSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log("Computer: ", computerSelection);
    console.log("Human: ", humanSelection);
    playRound (humanSelection, computerSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log("Computer: ", computerSelection);
    console.log("Human: ", humanSelection);
    playRound (humanSelection, computerSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log("Computer: ", computerSelection);
    console.log("Human: ", humanSelection);
    playRound (humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log("Human won. Total score: Computer: ", computerScore, " Human: ", humanScore);
    }
    else if (computerScore > humanScore) {
        console.log("Computer won. Total score: Computer: ", computerScore, " Human: ", humanScore);
    }
    else {
        console.log("It's a tie. Total score: Computer: ", computerScore, " Human: ", humanScore);
    }

}

playGame();




