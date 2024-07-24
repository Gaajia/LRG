const canvas = document.getElementById('ourCanvas')
const ctx = canvas.getContext('2d')

const gridSize = canvas.width / 6;
const gridWidth = 6;
const gridHeight = 6;

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



drawGrid()
