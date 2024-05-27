function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.innerText += value;
    display.classList.add('blink');
    setTimeout(() => {
        display.classList.remove('blink');
    }, 150);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Erro';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.innerText = '';
}