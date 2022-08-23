'use strict'

// Task-1_function_concatStrings

function concatStrings(inputString, separator) {
  function isValidString(stringForCheck) {
    return typeof stringForCheck === 'string';
  }

  let concatenatedString = inputString;

  if (!isValidString(separator)) {
    separator = '';
  }

  function concatenat(additionalString) {
    if (!isValidString(additionalString)) {
      return concatenatedString;
    }

    concatenatedString += separator + additionalString;

    return concatenat;
  }

  return concatenat;
}

// Task-2_class_Calculator

function isValidNum(...numbers) {
  numbers.forEach(num => {
    if (!Number.isFinite(num)) {
      throw new Error('Invalid inputs, inputs should be corret number!!!');
    }
  });

  return true;
}

class Calculator {
  constructor(firstNum, secondNum) {
    isValidNum(firstNum, secondNum);

    this.x = firstNum;
    this.y = secondNum;
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  setX(num) {
    isValidNum(num);
    
    return (this.x = num);
  }

  setY(num) {
    isValidNum(num);
    
    return (this.y = num);
  }

  logSum() {
    const { x, y } = this;

    return x + y;
  }

  logMul() {
    const { x, y } = this;

    return x * y;
  }

  logSub() {
    const { x, y } = this;

    return x - y;
  }

  logDiv() {
    const { x, y } = this;
    
    if (y === 0) {
      throw new Error('Cannot be divided by 0!!!');
    }

    return x / y;
  }
}
