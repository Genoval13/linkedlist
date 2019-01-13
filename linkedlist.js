const Node = require("./node");

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

  indexOf(data) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
        if (currentNode.data === data) {
            return count;
        } else {
            count++;
            currentNode = currentNode.next;
        }
    }

    return -1;
  }

  insertAt(idx, data) {
    if (idx > 0 && idx > this.length) return false;
    else {
        let node = new Node(data);
        let curr, prev;
        curr = this.head;

        if (idx === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let count = 0;

            while (count < idx) {
                count++;
                prev = curr;
                curr = curr.next;
            }

            node.next = curr;
            prev.next = node;
        }
        this.length++;
    }
  }

  removeAt(idx) {
      if (idx > 0 && idx > this.length) {
          return -1;
      } else {
          let curr, prev, count = 0;
          curr = this.head;
          prev = curr;

          if (idx === 0)  {
            this.head = curr.next;
          } else {
              while (count < idx) {
                  count++;
                  prev = curr;
                  curr = curr.next;
              }

              prev.next = curr.next;
          }
          this.length--;
      }
  }
}

module.exports = LinkedList;
