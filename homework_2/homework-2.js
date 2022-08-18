'use strict'

// Task-1_makeObjectDeepCopy

function makeObjectDeepCopy(obj) {
  let clonedObj;

  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Object) {
    clonedObj = {};

    for (const key in obj) {
      clonedObj[key] = makeObjectDeepCopy(obj[key]);
    }

    return clonedObj;
  }
}

// Task-2_selectFromInterval

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

// Task-3_myIterable

const myIterable = { from: 1, to: 4 };

myIterable[Symbol.iterator] = function () {
  const { to } = this;
  let { from } = this;

  if ((!from || !to) || (to < from) || (typeof from !== 'number' || typeof to !== 'number')) {
    throw new Error('Incorrect input');
  }

  return {
    next() {
      if (from <= to) {
        return { done: false, value: from++ }
      } else {
        return { done: true }
      }
    }
  };
};

for (const char of myIterable) {
  console.log(char);
}
