class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(x) {
    let newItem = new ListNode(x)
    if (!this.queue) {
      this.queue = newItem;
    }
    else {
      let item = this.queue;
      while (item) {
        if (item.next == null) {
          item.next = newItem;
          break;
        }
        item = item.next;
      }
    }
  }

  dequeue() {
    let item = this.queue.value;
    this.queue = this.queue.next;
    return item;
  }
}

module.exports = {
  Queue
};