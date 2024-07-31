import { setHighScore, setCurrentScore } from "./utils/score-values.js";

const canvas = document.getElementById('ourCanvas');
const ctx = canvas.getContext('2d');
const gridSize = canvas.width / 20;
const gridWidth = 20;
const gridHeight = 20;

let appleX, appleY;
let simulatedSnakeX = 1 * gridSize;
let simulatedSnakeY = 2 * gridSize;
let snakeBody = [{ x: simulatedSnakeX, y: simulatedSnakeY }];
let veloX = 0, veloY = 0;
let currentScore = 0;
let highScore = 0;

function resetGame() {
    simulatedSnakeX = 1 * gridSize;
    simulatedSnakeY = 2 * gridSize;
    snakeBody = [{ x: simulatedSnakeX, y: simulatedSnakeY }];
    veloX = 0;
    veloY = 0;
    currentScore = 0;
    generateApple();
    setCurrentScore(currentScore);
}

// Draw the grid
function drawGrid() {
    ctx.beginPath();
    for (let i = 0; i <= gridWidth; i++) {
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
    }
    for (let j = 0; j <= gridHeight; j++) {
        ctx.moveTo(0, j * gridSize);
        ctx.lineTo(canvas.width, j * gridSize);
    }
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

// Generate a new apple position
function generateApple() {
    appleX = Math.floor(Math.random() * gridWidth) * gridSize;
    appleY = Math.floor(Math.random() * gridHeight) * gridSize;
}

// Draw the apple on the canvas
function drawApple() {
    ctx.fillStyle = 'red';
    ctx.fillRect(appleX, appleY, gridSize, gridSize);
}

// Draw the snake
function drawSnake() {
    ctx.fillStyle = 'blue';
    snakeBody.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
}

// Change the snake's position based on velocity
function changeSnakePosition() {
    simulatedSnakeX += veloX * gridSize;
    simulatedSnakeY += veloY * gridSize;

    // Update the snake body with the new head position
    snakeBody.unshift({ x: simulatedSnakeX, y: simulatedSnakeY });

    // Check for apple consumption
    if (simulatedSnakeX === appleX && simulatedSnakeY === appleY) {
        currentScore++;
        setCurrentScore(currentScore);
        generateApple();
    } else {
        snakeBody.pop(); // Remove the last segment to simulate movement
    }
}

// Check for collisions
function createCollision(x, y) {
    // Check wall collisions
    if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) {
        alert(`You've hit the wall! Try again!`);
        return true;
    }
    // Check self-collisions
    for (let i = 1; i < snakeBody.length; i++) {
        if (snakeBody[i].x === x && snakeBody[i].y === y) {
            alert(`You've collided with yourself! Try again!`);
            return true;
        }
    }
    return false;
}

// Handle keydown events to change direction
const direction = (e) => {
    if (e.key === "ArrowUp" && veloY !== 1) {
        veloX = 0;
        veloY = -1;
    } else if (e.key === "ArrowDown" && veloY !== -1) {
        veloX = 0;
        veloY = 1;
    } else if (e.key === "ArrowLeft" && veloX !== 1) {
        veloX = -1;
        veloY = 0;
    } else if (e.key === "ArrowRight" && veloX !== -1) {
        veloX = 1;
        veloY = 0;
    }
};

// Game loop function
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawApple();
    changeSnakePosition();
    if (createCollision(simulatedSnakeX, simulatedSnakeY)) {
        resetGame(); // Reset the game on collision
    }
    drawSnake();
}

// Event listener for key presses
document.body.addEventListener('keydown', direction);

// Set initial values for apple and scores
generateApple();
setHighScore(highScore);
setCurrentScore(currentScore);

// Start the game loop
setInterval(gameLoop, 200);



document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
     document.getElementById('btn').style.visibility = 'hidden';
    }
  });

setHighScore();
setCurrentScore();
