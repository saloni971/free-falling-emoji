const playPauseButton = document.querySelector('.play-pause');
let gameOver = false;

playPauseButton.addEventListener('click', () => {
  if (gameOver) {
    // Resume the game
    gameOver = false;
    playPauseButton.textContent = 'Pause';
  } else {
    // Pause the game
    gameOver = true;
    playPauseButton.textContent = 'Play';
  }
});

const currentRecordElement = document.getElementById('current-record');
const currentScoreElement = document.getElementById('current-score');
const playerNameElement = document.getElementById('player-name');

// Update the current score and player name