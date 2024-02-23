const add = function(a, b) {
    return a + b;
  };
  
const subtract = function(a, b) {
      return a - b;
};
  
const divide = function(a, b) {
    return a / b;
};
  
const multiply = function(a, b) {
    return a * b;
};

const display = document.querySelector('.display');
  
let firstNumber;
let operator;
let secondNumber;
let displayValue = 0;

function operate (operator, a, b) {
    a = Number(a);
    b = Number(b);
    if (operator === "/" && b === 0) {
        return "You dummy!!! That's not possible xD";
    } else {
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
    }
};

function populateDisplay (number) {
    if (operator == undefined) {
        displayValue = number;
        firstNumber = displayValue;
        display.textContent = displayValue;
    } else {
        displayValue = number;
        secondNumber = displayValue;
        display.textContent = displayValue;
    }
};

const numberButtons = document.querySelectorAll('button.numbers');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        populateDisplay (numberButtons[i].value);
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
    operator = undefined;
    secondNumber = 0;
    displayValue = 0;
});

const equalButton = document.querySelector('.equal-button');
equalButton.addEventListener('click', () => {
    displayValue = operate(operator, firstNumber, secondNumber);
    display.textContent = displayValue;
});