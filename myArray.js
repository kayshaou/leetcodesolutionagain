class MyArray {
  //initialize stuff
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.length;
  }

  delete(index) {
    this.shiftItem(index);
  }

  shiftItem(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]; // the next index will now become the previous index
      // for example 1,2,5,6 and we deleting 5 which is at index 2, 6 shd now be shifted to index 2
    }
    delete this.data[this.length - 1];
    this.length = this.length - 1;
  }
}

let r = new MyArray();
r.push("apple");
r.push("banana");
r.push("papaya");
r.push("orange");
console.log(r);
r.shiftItem(0);
console.log(r);
r.pop();
console.log(r);
