// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
    this.start = 0;
    this.end = 0;
  }

  add(record) {
    this.data.unshift(record);
    this.start++;
  }

  remove() {
    this.start--;
    return this.data.pop();
  }
  peek(){
    return this.data[this.end]

  }
}

module.exports = Queue;
