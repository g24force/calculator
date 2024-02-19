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
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
            case "/":
                return divide(a, b);
        case "x":
            return multiply(a, b);
    }
};

let displayValue = 0;

const numberButtons = document.querySelectorAll('button.numbers')

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        display.textContent = numberButtons[i].value;
    })
}

/* function numbersToDisplay () {

}; */