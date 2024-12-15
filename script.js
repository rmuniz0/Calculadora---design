const toggleThemeButton = document.getElementById('toggleTheme');
const resultDisplay = document.getElementById('result');
const historyDisplay = document.getElementById('history');
let currentInput = '';
let history = '';



// Alternar tema
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleThemeButton.textContent = document.body.classList.contains('dark')
        ? '☀️ Modo Claro'
        : '🌙 Modo Escuro';
});

// Calculadora funcional
document.querySelector('.buttons').addEventListener('click', (e) => {
    const value = e.target.innerText;
    if (!e.target.matches('button')) return;

    switch (value) {
        case 'C':
            currentInput = '';
            history = '';
            break;
        case '⌫':
            currentInput = currentInput.slice(0, -1);
            break;
        case '=':
            try {
                history = currentInput;
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Erro';
            }
            break;
        default:
            currentInput += value;
            break;
    }
    updateDisplay();
});

function updateDisplay() {
    resultDisplay.innerText = currentInput || '0';
    historyDisplay.innerText = history;
}