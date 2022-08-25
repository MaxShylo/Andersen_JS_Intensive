'use strict'

// Task-2_class_LinkedList

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error('Non-iterable');
    }

    const newLinkedList = new LinkedList();

    [...iterable].forEach(elem => {
      newLinkedList.append(elem);
    });

    return newLinkedList;
  }

  append(elem) {
    const newNode = new Node(elem);

    if (!this.head) {
      this.head = newNode;
    } else {
      let tail = this.head;

      while (tail.next !== null) {
        tail = tail.next;
      }

      tail.next = newNode;
    }

    this.length++;
    
    return this;
  }

  prepend(elem) {
    const newNode = new Node(elem);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  find(elem) {
    let current = this.head;

    while (current !== null) {
      if (current.value === elem) {
        return current.value;
      }

      current = current.next;
    }

    return null;
  }

  toArray() {
    const arrData = [];

    let current = this.head;

    while (current !== null) {
      arrData.push(current.value);

      current = current.next;
    }

    return arrData;
  }
}
