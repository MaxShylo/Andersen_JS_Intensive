'use strict'

// Task-1_class_Stack

class Stack {
  constructor(maxSize = 10) {
    if (!Number.isFinite(maxSize)) {
      throw new Error('Invalid input, input should be corret number!!!');
    }

    this.size = maxSize;
    this.items = [];
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error('Non-iterable');
    }

    const stackFromIterable = new Stack([...iterable].length);
    stackFromIterable.items = [...iterable];

    return stackFromIterable;
  }

  push(element) {
    const { size, items } = this;

    if (items.length === size) {
      throw new Error('Stack full!!');
    }

    return (items[items.length] = element);
  }

  pop() {
    const { items } = this;

    if (!items.length) {
      throw new Error('Stack is empty!!!');
    }

    const removedElement = items[items.length - 1];
    items.length--;

    return removedElement;
  }

  peek() {
    const { items } = this;

    return !items.length ? null : items[items.length - 1];
  }

  isEmpty() {
    const { items } = this;

    return items.length === 0;
  }

  toArray() {
    const { items } = this;

    return [...items];
  }
}

module.exports = { Stack };
