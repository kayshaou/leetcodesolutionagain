class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  // first in last out FILO
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.length > 0) {
      return this.top;
    }
    return null;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const topNow = this.top;
      this.top = newNode;
      this.top.next = topNow;
    }
    this.length++;
  }

  pop() {
    if (!this.bottom) {
      return null;
    } else {
      const nextNode = this.top.next;
      this.top = nextNode;
    }
    this.length--;
  }

  print() {
    console.log(JSON.stringify(this.top) + " and " + this.length);
  }
}

const stack = new Stack();
console.log(stack.push("Google"));
console.log(stack.push("Udemy"));
console.log(stack.push("Discord"));
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.pop());
console.log(stack.pop());
stack.print();
console.log(stack.push("Discord"));
console.log(stack.push("Apple"));
console.log(stack.push("Banana"));
stack.print();
