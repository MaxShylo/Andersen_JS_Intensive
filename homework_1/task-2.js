'use strict'

function calculateNumbers() {
  const firstNumber = +prompt('Please, put first number');

  if (!isFinite(firstNumber)) {
    return console.error('Invalid input!');
  }

  const secondNumber = +prompt('Please, put second number');

  if (!isFinite(secondNumber)) {
    return console.error('Invalid input!');
  }

  console.log(`Result: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`);
}

calculateNumbers();
