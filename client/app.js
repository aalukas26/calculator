//calculator states
let currentValue = '0';
let previousValue = null;
let operation = null;
let resetdisplay = false;

const display = document.querySelector('.result');

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        //numbers
        if(button.classList.contains('number') && button.dataset.number) {
            handleNumber(button.dataset.number);
        }

        //operations
        if(button.classList.contains('operation')) {
            handleOperation(button.dataset.action);
        }

        //functions
        if(button.classList.contains('function')) {
            handleFunction(button.dataset.action);
        }
    })
});


function handleNumber(num) {
    if(resetdisplay) {
        currentValue = num;
        resetdisplay = false;
    } else {
        currentValue = currentValue === '0' ? num : currentValue + num;
    }
    updateDisplay();
}

function handleFunction(action) {
    switch(action) {
        case 'clear':
            currentValue = '0';
            previousValue = null;
            operation = null;
            break;
        case 'negate':
            currentValue = String(parseFloat(currentValue) * -1);
            break;
        case 'percent':
            currentValue = String(parseFloat(currentValue) / 100);
            break;
        case 'decimal':
            if (!currentValue.includes('.')) {
                currentValue += '.';
            }
            break;
        case 'back':
            if(currentValue.length > 1) {
                currentValue = currentValue.slice(0, -1);
            } else {
                currentValue = '0';
            }
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentValue;
}