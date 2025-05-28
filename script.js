let controls = document.querySelector('.controls');
let humanText = document.querySelector('.humanScore');
let computerText = document.querySelector('.computerScore');
let desc = document.querySelector('.desc');

let hScore;
let cScore;

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

function updateUI() {
    humanText.textContent = `Human score: ${hScore}`;
    computerText.textContent = `Computer score: ${cScore}`;
}

function playGame() {
    hScore = 0;
    cScore = 0;
    controls.addEventListener('click', (e) => playRound(e.target.closest('button').id));
    
    function playRound(h) {
        let c = getComputerChoice();
        console.log(`h: ${h}, c: ${c}`);
        if (h==c) {
            hScore++;
            cScore++;
            desc.textContent = `It\'s a draw!\n${h} and ${c} are the same!`;
        }
        else if ((h == 'rock' && c == 'paper') 
            || (h == 'paper' && c == 'scissors')
            || (h == 'scissors' && c == 'rock')) {
            cScore++;
            desc.textContent = `You lose!\n${h} doesn't beat ${c}!`;
        }
        else {
            hScore++;
            desc.textContent = `You win!\n${h} beats ${c}!`;
        }
        updateUI();
        if (hScore == 5 || cScore == 5) {
            desc.style['font-weight'] = 'bold';
            let winner = 
            hScore < cScore ? 'Computer'
            : hScore > cScore ? 'Human'
            : 'No one'
            desc.textContent = `This is the end! ${winner} wins!`;
            Array.from(document.querySelectorAll('.controls button')).forEach((x) => x.disabled = true);
        }
    }

}

playGame();