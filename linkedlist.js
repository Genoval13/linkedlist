const Node = require("./node");
class Node {
  constructor(data = null, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  indexOf(value) {
    let currentNode = this.head;
    let count = 0;

    return currentNode.data;
  }

  get(n, node) {
    if (this.length === 0) return null;
    if (n === 0) return node;
    else this.get(--n, node.next);
  }

  // insertAt()
  // removeAt()
}
const myList = new LinkedList();
myList.add(1);
myList.add(2);
myList.add(3);
console.log(myList.get(2, 1));
module.exports = LinkedList;
