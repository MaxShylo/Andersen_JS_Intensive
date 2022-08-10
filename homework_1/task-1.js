'use strict'

function convertToCorrectNumeralSys() {
  const number = +prompt('Please, put a number');
  const numeralSys = +prompt('Please, put numeral system');
  const ifCorrectNumeralSys = numeralSys >= 2 && numeralSys <= 36;
  
  if (!ifCorrectNumeralSys || !isFinite(number)) {
    return console.error('Invalid input!');
  }

  console.log((number).toString(numeralSys));
}

convertToCorrectNumeralSys();
