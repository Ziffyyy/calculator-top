let lastNumber;
let currentNumber;
let operator;
let displayValue = document.querySelector('#display');
const digitButtons = document.querySelectorAll('.digit');

digitButtons.forEach(button => {
    const buttonText = button.textContent;
    button.addEventListener('click', () => {
        displayValue.textContent += buttonText;
    });
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