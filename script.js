let lastNumber;
let currentNumber;
let operator;
let hasOperatorBeenTriggered = false;
let displayValue = document.querySelector('#display');
const digitButtons = document.querySelectorAll('.digit');
const opButtons = document.querySelectorAll('.operator');
const eqButton = document.querySelector('#equal-operator');

digitButtons.forEach(button => {
    const buttonText = button.textContent;
    button.addEventListener('click', () => {
        if (!hasOperatorBeenTriggered) {
            if (displayValue.textContent == 0) {
                displayValue.textContent = buttonText;
            } else {
                displayValue.textContent += buttonText;
            }
        } else {
            displayValue.textContent = buttonText;
            hasOperatorBeenTriggered = false;
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
                currentNumber = +displayValue.textContent;
                displayValue.textContent = operate(lastNumber, currentNumber, operator);
                operator = button.textContent;
                lastNumber = +displayValue.textContent;
                hasOperatorBeenTriggered = true;
            }
        })
    }
})

eqButton.addEventListener('click', () => {
    if (operator) {
        currentNumber = +displayValue.textContent;
        displayValue.textContent = operate(lastNumber, currentNumber, operator);
        operator = null;
    }
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


console.log(displayValue)