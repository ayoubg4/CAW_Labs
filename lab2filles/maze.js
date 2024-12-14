const StartBox = document.getElementById("start");
const EndBox = document.getElementById("end");
const boundaries = document.querySelectorAll(".boundary");
const maze = document.getElementById("maze");
const status = document.getElementById("status");
let gameStarted = false;
let gameEnded = false;

const resetGame = () => {
  boundaries.forEach(boundary => {
    boundary.classList.remove('active', 'lose', 'blue');
  });
  status.textContent = "";
  gameStarted = false;
  gameEnded = false;
};

const startGame = () => {
  gameStarted = true;
  boundaries.forEach(boundary => {
    boundary.addEventListener('mouseover', () => {
      if (!gameEnded) {
        boundaries.forEach(boundary => {
          boundary.classList.add('lose');
        });
        status.textContent = "You Lose! :(";
        gameEnded = true;
      }
    });
  });

  EndBox.addEventListener('mouseover', () => {
    if (!gameEnded) {
      boundaries.forEach(boundary => {
        boundary.classList.add('blue');
      });
      status.textContent = "You Win! :)";
      gameEnded = true;
    }
  });

  maze.addEventListener('mouseleave', () => {
    if (gameStarted && !gameEnded) {
      boundaries.forEach(boundary => {
        boundary.classList.add('lose');
      });
      status.textContent = "You Lose! :(";
      gameEnded = true;
    }
  });
};

StartBox.addEventListener('mouseover', () => {
  if (!gameStarted) {
    startGame();
  }
});

StartBox.addEventListener('click', () => {
  location.reload();
});