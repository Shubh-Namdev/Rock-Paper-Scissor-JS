function startGame() {
    const inputElem = document.getElementById('input');
    const roundsLeftElem = document.getElementById('rounds-left');
    let inputValue = inputElem.value;
    roundsLeftElem.textContent = inputValue;
    inputElem.value = '';

    if (inputValue > 0) {
        let computerPoints = 0, userPoints = 0;
        checkResult = (msg) => {
            const choice = ['ROCK', 'PAPER', 'SCISSOR'];
            const computerChoice = Math.floor(Math.random() * 3);
            const computerChoiceElem = document.getElementById('computer-select');
            computerChoiceElem.textContent = choice[computerChoice];

            const midResultElem = document.getElementById('mid-result');
            const computerPointElem = document.getElementById('computer-point');
            const userPointsElem = document.getElementById('user-point');

            switch (msg) {
                case 'Rock':
                    if (choice[computerChoice] === 'PAPER') {
                        midResultElem.textContent = 'LOST'
                        computerPoints++;
                        computerPointElem.textContent = computerPoints;
                        inputValue--;
                        roundsLeftElem.textContent = inputValue;

                    } else if (choice[computerChoice] === 'ROCK') {
                        midResultElem.textContent = 'TIE';
                        computerPoints++;
                        computerPointElem.textContent = computerPoints;
                        userPoints++;
                        userPointsElem.textContent = userPoints;
                        inputValue--;
                        roundsLeftElem.textContent = inputValue;

                    } else {
                        midResultElem.textContent = 'WON';
                        userPoints++;
                        userPointsElem.textContent = userPoints;
                        inputValue--
                        roundsLeftElem.textContent = inputValue;
                    }
                    break;

                case 'Paper':
                    if (choice[computerChoice] === 'SCISSOR') {
                        midResultElem.textContent = 'LOST'
                        computerPoints++;
                        computerPointElem.textContent = computerPoints;
                        inputValue--;
                        roundsLeftElem.textContent = inputValue;
                    } else if (choice[computerChoice] === 'PAPER') {
                        midResultElem.textContent = 'TIE';
                        computerPoints++;
                        computerPointElem.textContent = computerPoints;
                        userPoints++;
                        userPointsElem.textContent = userPoints;
                        inputValue--;
                        roundsLeftElem.textContent = inputValue;
                    } else {
                        midResultElem.textContent = 'WON';
                        userPoints++;
                        userPointsElem.textContent = userPoints;
                        inputValue--;
                        roundsLeftElem.textContent = inputValue;
                    }
                    break;

                case 'Scissor':
                    if (choice[computerChoice] === 'ROCK') {
                        midResultElem.textContent = 'LOST'
                        computerPoints++;
                        computerPointElem.textContent = computerPoints;
                        inputValue--;
                        roundsLeftElem.textContent = inputValue;
                    } else if (choice[computerChoice] === 'SCISSOR') {
                        midResultElem.textContent = 'TIE';
                        computerPoints++;
                        computerPointElem.textContent = computerPoints;
                        userPoints++;
                        userPointsElem.textContent = userPoints;
                        inputValue--;
                        roundsLeftElem.textContent = inputValue;
                    } else {
                        midResultElem.textContent = 'WON';
                        userPoints++;
                        userPointsElem.textContent = userPoints;
                        inputValue--;
                        roundsLeftElem.textContent = inputValue;
                    }
                    break;

            }
        }

        function gamePlay() {
            const rockElem = document.getElementById('rock');
            rockElem.addEventListener('click', () => {
                checkResult('Rock');
            })

            const paperElem = document.getElementById('paper');
            paperElem.addEventListener('click', () => {
                checkResult('Paper');
            });

            const scissorElem = document.getElementById('scissor');
            scissorElem.addEventListener('click', () => {
                checkResult('Scissor');
            });
        }

        gamePlay();

    }else{
        alert('Chance has been over,Please restart the game.')
    }

}

const startButton = document.getElementById('start');
startButton.addEventListener('click', () => {
    startGame()
})

