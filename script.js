const canvas = document.getElementById('ourCanvas')
const ctx = canvas.getContext('2d')
const gridSize = canvas.width / 6;
const gridWidth = 6;
const gridHeight = 6;
let appleX, appleY;
let simulatedSnakeX = 5 * gridSize;
let simulatedSnakeY = 5 * gridSize;
let highScore = 0;
let currentScore = 0;

function setHighScore() {
    const highScoreSpan = document.getElementById('hscore');
    highScoreSpan.textContent = highScore
};

function setCurrentScore() {
    const currentScoreSpan = document.getElementById('current-score');
    currentScoreSpan.textContent = currentScore
};





function drawGrid() {
    for(let i = 0; i <= gridWidth; i++){
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
    }
    for(let j = 0; j<=gridHeight; j++){
        ctx.moveTo(0, j * gridSize);
        ctx.lineTo(canvas.width, j * gridSize);
    }

    ctx.strokeStyle = 'black';
    ctx.stroke()
}

function generateApple(){
    appleX = Math.floor(Math.random() * gridWidth) * gridSize;
    appleY = Math.floor(Math.random() * gridHeight) * gridSize;
}

function drawApple(){
    ctx.fillStyle = 'red';
    ctx.fillRect(appleX,appleY,gridSize,gridSize)
}

function createCollision(x,y){
    if(x < 0 || x >= canvas.width || y < 0 || y >= canvas.height){
        alert(`You've hit the wall! Try again!`);
        return true
    }
    return false
}

function gameLoop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawGrid();
    drawApple();
    // this will be for the snake
    const simulatedSnakeX = 2 * gridSize
    const simulatedSnakeY = 2 * gridSize
    createCollision(simulatedSnakeX,simulatedSnakeY)
}



if(createCollision(simulatedSnakeX,simulatedSnakeY)){
    console.log('Collision detected at:', simulatedSnakeX, simulatedSnakeY)
} else {
    console.log("No collision detected", simulatedSnakeX, simulatedSnakeY)
}

generateApple();
setInterval(gameLoop,200)

 setHighScore()
 setCurrentScore()
