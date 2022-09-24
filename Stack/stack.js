'use strict'

const Node = require('./node')

class Stack {
    constructor() {
        this.top=null;

    }


    push(value) {
        let node = new Node(value);
        if(this.top){
            node.next = this.top
            this.top=node
        } else {
            this.top= node;
        }
    }

    pop() {
        if(this.top) {
            let deletedNode = this.top;
            this.top = deletedNode.next;
            deletedNode.next=null;
        } else {
            return 'The Stack is already empty!'
        }
    }

    peak() {
        if(this.top){
            return this.top.value
        } else {
            return 'The Stack is empty!'
        }
    }

    isEmpty() {
      
        return (!this.top? true: false);
    }

}

module.exports = Stack;
