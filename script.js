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
    document.querySelector('.message').textContent = '⛔ No Number';
    return;
  }

  if (guess === secretNumber) correctGuess();
  else incorrectGuess(guess, secretNumber);
}

function correctGuess() {
  highscore = score > highscore ? score : highscore;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.message').textContent = '🎉 Correct Number!';
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
  document.querySelector('.score').textContent = --score;
}

function lostGame() {
  document.querySelector('.message').textContent = '🧨 You lost the game';
  document.querySelector('.score').textContent = '0';
}

function resetGame() {
  score = CONST_START_SCORE;
  secretNumber = createSecretNumber();
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
}
