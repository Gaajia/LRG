let highScore = 0;
let currentScore = 0;

export function setHighScore(highScore) {
    const highScoreSpan = document.getElementById('hscore');
    highScoreSpan.textContent = highScore;
    localStorage.setItem('hscore', highScore);
}

export function setCurrentScore(currentScore) {
    const currentScoreSpan = document.getElementById('current-score');
    currentScoreSpan.textContent = currentScore;
}

export function getHighScore() {
    return localStorage.getItem('hscore') || 0;
}
