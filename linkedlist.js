const Node = require("./node");

class LinkedList { 
    constructor() { 
        this.length = 0;
        this.head = null;
        this.tail = null;
    } 
  
    add (data) {
      const newNode = new Node(data);
      if (this.length === 0) {
          this.head = this.tail = newNode;
      } else {  
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
    } 
    // get() 
    indexOf (node) {

    }  
    // insertAt()
    // removeAt()

} 

module.exports = LinkedList;