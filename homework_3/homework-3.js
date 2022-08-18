'use strict'

// Task-1_myFilter

Array.prototype.myFilter = function (callback, contextObject = {}) {
  const filteredArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(contextObject, this[i], i, this)) {
      filteredArr.push(this[i]);
    }
  }

  return filteredArr;
};

// Task-2_createDebounceFunction

const createDebounceFunction = (callback, delay) => {
  let timerId;

  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(callback, delay);
  };
};
