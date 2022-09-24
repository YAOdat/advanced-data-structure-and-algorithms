'use strict';

const Node = require('./Node')

class Queue {
    constructor () {
        this.first = null;
        this.last =null;
    }


    enqueue(value) {
        let node = new Node (value);

        if(this.first == null) {
            this.first = node;
            this.last= node;
        } else {
            this.last.next =node;
            this.last = node
        }
    }

    dequeue() {

        if (!this.front) "[Exception!] The Queue is empty!"

        let firstNode = this.first
        this.first = firstNode.next
        firstNode.next = null

        return firstNode
    }


    peak() {
        return(this.first? this.first.value: '[Exception!] No element is in the queue!')
    }

    
    isEmpty(){
        return(this.first? false: true)
    }

    
}


module.exports = Queue;