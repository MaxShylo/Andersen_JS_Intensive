'use strict'

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

