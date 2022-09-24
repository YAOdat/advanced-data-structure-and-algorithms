'use strict'

const Queue = require("../queue")


describe("Implementing Queue Using Linked List Test", () => {
    it('Creation Test', () => {
        const queue = new Queue();
        expect (queue).toBeDefined();
        expect(queue.first).toBeNull
        expect(queue.last).toBeNull

    })

    it('Enqueue Method Test', () => {
        const queue = new Queue();
        queue.enqueue(711);
        queue.enqueue(1453);
        expect(queue.first.value).toEqual(711);
        expect(queue.last.value).toEqual(1453);

    })

    it('Dequeue Method Test', () => {
        const queue = new Queue();
        queue.enqueue(711);
        queue.enqueue(1453);
        queue.dequeue();
        expect(queue.first.value).toEqual(1453);
        queue.dequeue();
        expect(queue.first).toEqual(null);

    })



    it('Peak Method Test', () => {
        const queue = new Queue();
        queue.enqueue(711);
        queue.enqueue(1453);
        queue.peak();
        expect(queue.peak()).toEqual(711);
        expect(queue.first.value).toEqual(711);
        
    })


    it('isEmpty Method Test', () => {
        const queue = new Queue();
        queue.isEmpty();
        expect(queue.isEmpty()).toBeTruthy();
        queue.enqueue(711);
        expect(queue.isEmpty()).toBeFalsy();

        
    })




})
