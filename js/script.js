let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let gameMode = "multi"; // 'single' ou 'multi'

const statusDisplay = document.getElementById('status');
const cells = document.querySelectorAll('.cell');
const music = document.getElementById('bg-music');

// Condições de Vitória
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

// Navegação entre Telas
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
    if(screenId === 'main-menu') resetGame();
}

function startGame(mode) {
    gameMode = mode;
    showScreen('game-screen');
    music.play().catch(() => {}); // Inicia música após interação
}

// Lógica de Movimento
function handleCellClick(e) {
    const clickedCell = e.target;
    const clickedIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedIndex] !== "" || !gameActive) return;

    makeMove(clickedIndex, clickedCell);

    if (gameActive && gameMode === "single" && currentPlayer === "O") {
        setTimeout(aiMove, 500);
    }
}

function makeMove(index, element) {
    gameState[index] = currentPlayer;
    element.innerText = currentPlayer;
    checkResult();
}

function aiMove() {
    const emptyIndices = gameState.map((v, i) => v === "" ? i : null).filter(v => v !== null);
    if (emptyIndices.length > 0 && gameActive) {
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        const targetCell = document.querySelector(`[data-index="${randomIndex}"]`);
        makeMove(randomIndex, targetCell);
    }
}

function checkResult() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerText = `Jogador ${currentPlayer} Venceu!`;
        gameActive = false;
        return;
    }

    if (!gameState.includes("")) {
        statusDisplay.innerText = "Empate!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerText = `Vez do Jogador ${currentPlayer}`;
}

// Opções
function changeTheme() {
    const theme = document.getElementById('theme-select').value;
    document.body.className = theme;
}

function updateVolume() {
    music.volume = document.getElementById('volume-slider').value;
}

function resetGame() {
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    statusDisplay.innerText = "Vez do Jogador X";
    cells.forEach(cell => cell.innerText = "");
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));