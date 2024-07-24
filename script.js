const canvas = document.getElementById('ourCanvas')
const ctx = canvas.getContext('2d')
const gridSize = canvas.width / 6;
const gridWidth = 6;
const gridHeight = 6;
let appleX, appleY;

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


drawGrid();
generateApple();
drawApple();



