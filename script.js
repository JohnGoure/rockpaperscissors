function computerPlay() {
  moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * 3)];
}

var computerscore = 0;
var playerscore = 0;
var title = document.querySelector('.title');
var header = document.createElement('h3');
var headerclass = 'data-winner-header';
header.classList.add(headerclass);
var playagain = document.createElement('button');
playagain.classList.add('playagain');
playagain.classList.add('btn');
playagain.classList.add('btn-default');
playagain.textContent = 'Play Again';

function playRound(playerSelection, computerSelection) {
  var playerChoice = playerSelection.toString();
  var computerChoice = computerSelection.toString();
  var playerChoice = playerChoice.toLowerCase();
  var computerChoice = computerChoice.toLowerCase();
  if (playerChoice === computerChoice) {
    playerscore += 1;
    computerscore += 1;
    return("It's a Tie!");
  }
  if (playerChoice === 'rock' && computerChoice === 'paper') {
    computerscore += 1;
    return "Computer Wins!";
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerscore += 1;
    return "You Win!";
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerscore += 1;
    return "You Win!";
  } else if (playerChoice === 'paper' && computerChoice == 'scissors') {
    computerscore += 1;
    return "Computer Wins!";
  } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
    playerscore += 1;
    return "You Win!";
  } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
    computerscore += 1;
    return "Computer Wins!";
  }
}

function addWinnerHeader (winner) {
  header.textContent = winner;
  title.appendChild(header);
}

function getButtonArray() {
  var buttons = document.querySelectorAll('button');
  var buttonArray = [].slice.call(buttons);
  return buttons;
}

function addButtonPressHandler(button) {
  'use strict';
  button.addEventListener('click', function() {
    var winner = playRound(button.getAttribute('name'), computerPlay());
    addWinnerHeader(winner);
  });
}

function game() {
 console.log(playing);
}

function initializeEvents() {
  'use strict';
  var buttons = getButtonArray();
  buttons.forEach(addButtonPressHandler);
}

initializeEvents();
