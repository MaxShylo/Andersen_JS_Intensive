'use strict'

function selectFromInterval(inputsArr, x, y) {
  if (!(inputsArr instanceof Array)) {
    throw new Error('The input parameter is not an array');
  }

  if (!inputsArr.every((input) => Number.isFinite(input))) {
    throw new Error('The input array should contain only correct numbers');
  }

  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    throw new Error('Incorrect interval parameters');
  }

  const startInterval = (x < y) ? x : y;
  const endInterval = (x > y) ? x : y;

  return inputsArr.filter((number) => (number > startInterval) && (number <= endInterval));
}
