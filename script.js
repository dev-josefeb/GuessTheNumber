'use strict';

let CONST_START_SCORE = 20;
let score = CONST_START_SCORE;
let highscore = 0;

let secretNumber = createSecretNumber();
document.querySelector('.check').addEventListener('click', checkValue);
document.querySelector('.again').addEventListener('click', resetGame);

function createSecretNumber() {
  return Math.trunc(Math.random() * CONST_START_SCORE) + 1;
}

function checkValue() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayContent('.message', '⛔ No Number');
    return;
  }

  if (guess === secretNumber) correctGuess();
  else incorrectGuess(guess, secretNumber);
}

function correctGuess() {
  highscore = score > highscore ? score : highscore;
  displayContent('.number', secretNumber);
  displayContent('.highscore', highscore);
  displayContent('.message', '🎉 Correct Number!');
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
}

function incorrectGuess(guess, number) {
  if (!(score > 1)) {
    lostGame();
    return;
  }

  document.querySelector('.message').textContent =
    guess > number ? `📈 Guess too high!` : '📉 Guess too low!';
  displayContent('.score', --score);
}

function lostGame() {
  displayContent('.message', '🧨 You lost the game');
  displayContent('.score', '0');
}

function resetGame() {
  score = CONST_START_SCORE;
  secretNumber = createSecretNumber();

  displayContent('.score', score);
  displayContent('.guess', '');
  displayContent('.number', '?');

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
}

function displayContent(className, content) {
  document.querySelector(className).textContent = content;
}
