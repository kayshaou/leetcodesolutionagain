/*
data structure

10 -> 5 -> 16
{
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}

*/

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let nextNode = {
      value,
      next: null,
    };
    this.tail.next = nextNode;
    this.tail = nextNode;
    this.length++;
    return this;
  }
  // from 10 -> 5 -> 16 to  1 -> 10 -> 5 -> 16
  prepend(value) {
    let headNode = {
      value,
      next: this.head,
    };
    this.head = headNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index == 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    let currentNode = this.head;
    let cntIdx = 0;
    let prevsNode;
    while (cntIdx < index) {
      cntIdx++; // O(n)
      currentNode = currentNode.next;
      if (cntIdx < index) {
        prevsNode = currentNode;
      }
      if (cntIdx === index) {
        let insertedNode = {
          value,
          next: currentNode,
        };
        prevsNode.next = insertedNode;
      }
    }
    this.length++;
  }
  remove(index) {
    if (index === 0) {
      // remove everything
      this.head = {};
    }
    if (index >= this.length) {
      // no action required
      return this.printList();
    }

    let counter = 0;
    let currentNode = this.head;

    let leaderNode;
    let trailerNode;
    while (counter <= index) {
      // start traversing until u reach the index
      if (counter < index) {
        leaderNode = currentNode;
      } else if (counter === index) {
        trailerNode = currentNode.next;
      }
      currentNode = currentNode.next;
      counter++;
    }

    leaderNode.next = trailerNode;
    this.length--;
    return this;
  }
}
const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
linkedList.prepend(12);
linkedList.insert(8, 9);
linkedList.insert(3, 2);
console.log(linkedList.printList());
linkedList.remove(1);
console.log(linkedList.printList());
linkedList.remove(2);
console.log(linkedList.printList());
linkedList.remove(4);
console.log(linkedList.printList());
