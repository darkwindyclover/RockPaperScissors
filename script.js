

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
        return "rock";
    }
    else if (choice >= 0.33 && choice < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() { 
    return prompt("Enter your choice:").toLowerCase();
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        if (computerChoice == humanChoice) {
            console.log(`It's draw. ${humanChoice} and ${computerChoice} are the same.`);
        }
        else if (computerChoice == "rock" && humanChoice == "paper" ||
                computerChoice == "paper" && humanChoice == "scissors" ||
                computerChoice == "scissors" && humanChoice == "rock") {
                    humanScore++;
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
        else {
            computerScore++;
            console.log(`You lose! ${humanChoice} doesn't beat ${computerChoice}`);
        }
    } 

    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(`Human score: ${humanScore}, computer score: ${computerScore}`);
}