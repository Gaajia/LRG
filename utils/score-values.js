let highScore = 0;
let currentScore = 0;

export function setHighScore() {
    const highScoreSpan = document.getElementById('hscore');
    highScoreSpan.textContent = highScore;
}



// Export variables if you need them in other files
export { highScore, };
