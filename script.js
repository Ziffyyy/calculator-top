let lastNumber;
let currentNumber;
let operator;
//Make the basic operations for the calculator
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