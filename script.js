let computerScore = 0;
let humanScore = 0;
let h3TotalScore = document.querySelector('#totalScore');

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function playRound(computerChoice, humanChoice) {
    // Status code: 0 - no winners, 1 - human win, 2 - pc win
    let result;
    let h3ComputerChoice = document.querySelector('#computerChoice');
    let h3HumanChoice = document.querySelector('#humanChoice');
    let h3CurrentResult = document.querySelector('#currentResult');
    let winner = '';

    h3ComputerChoice.textContent = computerChoice;
    h3HumanChoice.textContent = humanChoice;

    switch (humanChoice) {
        case 'rock': {
            switch (computerChoice) {
                case 'rock': result = 0; break;
                case 'paper': result = 2; break;
                case 'scissors': result = 1; break;
            }
            break;
        }
        case 'paper': {
            switch (computerChoice) {
                case 'rock': result = 1; break;
                case 'paper': result = 0; break;
                case 'scissors': result = 2; break;
            }
            break;
        }
        case 'scissors': {
            switch (computerChoice) {
                case 'rock': result = 2; break;
                case 'paper': result = 1; break;
                case 'scissors': result = 0; break;
            }
            break;
        }
    }

    switch (result) {
        case 0: {
            h3CurrentResult.textContent = `Draw.`;
            break;
        }
        case 1: {
            h3CurrentResult.textContent = `You win!`;
            humanScore += 1;
            break;
        }
        case 2: {
            h3CurrentResult.textContent = `You lose!`;
            computerScore += 1;
            break;
        }
    }

    if (humanScore > computerScore) winner = 'You are a winner!';
    else if (humanScore < computerScore) winner = 'You are a loser!';
    else winner = 'Draw.';

    h3TotalScore.textContent = `Computer: ${computerScore} | Player: ${humanScore} > ${winner}`;
}

document.addEventListener('click', (event) => {
    switch (event.target.id) {
        case 'rock': {
            playRound(getComputerChoice(), 'rock');
            break;
        }
        case 'paper': {
            playRound(getComputerChoice(), 'paper');
            break;
        }
        case 'scissors': {
            playRound(getComputerChoice(), 'scissors');
            break;
        }
    }
})