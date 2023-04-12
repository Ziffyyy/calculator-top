let lastNumber;
let currentNumber;
let operator;
let hasOperatorBeenTriggered = false;
let displayValue = document.querySelector('#display');
const digitButtons = document.querySelectorAll('.digit');
const opButtons = document.querySelectorAll('.operator');
const eqButton = document.querySelector('#equal-operator');
const clearButton = document.querySelector('#clear');

digitButtons.forEach(button => {
    const buttonText = button.textContent;
    button.addEventListener('click', () => {
        if (displayValue.textContent.length < 13) {
            if (!hasOperatorBeenTriggered) {
                if (displayValue.textContent == 0 ||
                    displayValue.textContent == 'Stop' ||
                    displayValue.textContent == 'Too big') {
                    displayValue.textContent = buttonText;
                } else {
                    displayValue.textContent += buttonText;
                }
            } else {
                displayValue.textContent = buttonText;
                hasOperatorBeenTriggered = false;
                if (currentNumber === false) {
                    currentNumber = true;
                }
            }
        }
    });
})

opButtons.forEach(button => {
    if (!hasOperatorBeenTriggered) {
        button.addEventListener('click', () => {
            if (!(+displayValue.textContent == false) &&
                !lastNumber || !operator) {
                lastNumber = +displayValue.textContent;
                displayValue.textContent = '';
                operator = button.textContent;
                hasOperatorBeenTriggered = true;
            } else {
                if (currentNumber !== false) {
                    currentNumber = +displayValue.textContent;
                    displayValue.textContent = operate(lastNumber, currentNumber, operator);
                    operator = button.textContent;
                    lastNumber = +displayValue.textContent;
                    currentNumber = false;
                    hasOperatorBeenTriggered = true;
                    roundValue();
                } else {
                    operator = button.textContent;
                }
            }
        })
    }
})

eqButton.addEventListener('click', () => {
    if (operator) {
        currentNumber = +displayValue.textContent;
        displayValue.textContent = operate(lastNumber, currentNumber, operator);
        operator = null;
        roundValue();
    }
})

clearButton.addEventListener('click', () => {
    displayValue.textContent = 0;
    hasOperatorBeenTriggered = false;
    operator = null;
    lastNumber = null;
    currentNumber = null;
})

function add(lastNumber, currentNumber) {
    return currentNumber = lastNumber + currentNumber;
}

function subtract(lastNumber, currentNumber) {
    return currentNumber = lastNumber - currentNumber;
}

function multiply(lastNumber,currentNumber) {
    return currentNumber = lastNumber * currentNumber;
}

function divide(lastNumber, currentNumber) {
    if (currentNumber === 0) {
        return 'Stop';
    }
    return currentNumber = lastNumber / currentNumber;
}

function operate(lastNumber, currentNumber, operator) {
    switch (operator) {
        case '+':
            return add(lastNumber,currentNumber);
        case '-':
            return subtract(lastNumber, currentNumber);
        case '*':
            return multiply(lastNumber, currentNumber);
        case '/':
            return divide(lastNumber, currentNumber);
        default:
            console.log('something went wrong...'); 
    }
}

function roundValue() {
    const decimalPart = displayValue.textContent.split('.')[1];
    const integerPart = displayValue.textContent.split('.')[0];
    if (decimalPart && displayValue.textContent.length > 13) {
        displayValue.textContent = (+displayValue.textContent).toFixed(10 - integerPart.length);
    } else if (displayValue.textContent.length > 13) {
        displayValue.textContent = 'Too big';
    }
}

console.log(displayValue)