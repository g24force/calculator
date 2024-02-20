const add = function(a, b) {
    return a + b;
  };
  
const subtract = function(a, b) {
      return a - b;
};
  
const divide = function(a, b) {
    return a / b;
};
  
const multiply = function(a) {
    let total = 1;
    for (let i = 0; i < a.length; i++) {
      total = total * a[i];
    }
    return total;
};

const display = document.querySelector('#display');
  
let firstNumber;
let operator;
let secondNumber;

function operate (operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '/':
                return divide(a, b);
        case 'x':
            return multiply(a, b);
    }
};

let displayValue = 0;

const numberButtons = document.querySelectorAll('button.numbers');

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        if (firstNumber !== undefined) {
            displayValue += numberButtons[i].value;
            secondNumber = numberButtons[i].value;
            display.textContent = displayValue;
        } else {
            displayValue += numberButtons[i].value;
            firstNumber = numberButtons[i].value;
            display.textContent = displayValue;
        }
    })
};

const operatorsButtons = document.querySelectorAll('button.operators');

for (let i = 0; i < operatorsButtons.length; i++) {
    operatorsButtons[i].addEventListener('click', () => {
        operator = operatorsButtons[i].value;
    })
};

const clearButton = document.querySelector('.clear-button');

clearButton.addEventListener('click', () => {
    display.textContent = 0;
    firstNumber = 0;
    operator = null;
    secondNumber = 0;
    displayValue = 0;
});

const equalButton = document.querySelector('.equal-button');

equalButton.addEventListener('click', () => {
    console.log(operator, firstNumber, secondNumber)
    displayValue = operate(operator, firstNumber, secondNumber);
    display.textContent = displayValue;
});