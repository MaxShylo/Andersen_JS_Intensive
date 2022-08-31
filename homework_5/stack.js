'use strict'

// Task-1_class_Stack

class Node {
  constructor(element) {
    this.data = element;
    this.previous = null;
  }
}

class Stack {
  constructor(inputSize = 10) {
    if (!Number.isFinite(inputSize) || inputSize <= 0) {
      throw new Error('Invalid input, input should be corret number!!!');
    }

    this.top = null;
    this.size = 0;
    this.maxSize = inputSize;
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error('Non-iterable');
    }

    const arrDataIterable = [...iterable];
    const stackFromIterable = new Stack(arrDataIterable.length);

    for (const elem of arrDataIterable) {
      stackFromIterable.push(elem);
    }

    return stackFromIterable;
  }

  push(element) {
    const node = new Node(element);

    if (this.size >= this.maxSize) {
      throw new Error('Stack full!!');
    }

    node.previous = this.top;
    this.top = node;
    this.size++;

    return this.top;
  }

  pop() {
    if (!this.size) {
      throw new Error('Stack is empty!!!');
    }

    const removedElement = this.top;
    this.top = this.top.previous;
    this.size--;

    return removedElement.data;
  }

  peek() {
    const { size, top } = this;

    return !size ? null : top.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const arrData = [];

    let current = this.top;
    let count = this.size;

    while (count > 0) {
      arrData[arrData.length] = current.data;

      current = current.previous;
      count--;
    }

    return arrData;
  }
}

module.exports = { Stack };
