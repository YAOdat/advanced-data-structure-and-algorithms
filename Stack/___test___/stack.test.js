'use strict'

const Stack = require("../stack")

describe("Implementing Stack Using Linked List Test", () => {
    it('Creation Test', () => {
        const stack = new Stack();
        expect (stack).toBeDefined();
        expect(stack.top).toBeNull
    })

    it('Push Method Test', ()=>{
        const stack = new Stack()
        stack.push(1998);
        stack.push(1999);
        stack.push(2000);
        expect(stack.top.value).toEqual(2000);
        expect(stack.top.next.value).toEqual(1999);
        expect(stack.top.next.next.value).toEqual(1998);


    })

    it('Pop Method Test on a Non-Empty Stack', ()=> {
        const stack = new Stack()
        const anotherStack = new Stack()

        stack.push(1998);
        stack.push(1999);
        stack.pop()
        expect(stack.top.value).toEqual(1998);
        stack.pop()
        expect(stack.top).toEqual(null);
        expect(anotherStack.pop()).toEqual("The Stack is already empty!")

    })


    it('Pop Method Test on an Empty Stack', ()=> {
        const stack = new Stack();

        expect(stack.pop()).toEqual("The Stack is already empty!")
    })


    it('Peak Method Test', () => {
    
        const stack = new Stack();
        stack.push(1998);
        
        expect(stack.peak()).toEqual(1998);

    })

    it('Peak Method Test When No Peak', () => {
    
        const stack = new Stack();
        
        expect(stack.peak()).toEqual('The Stack is empty!');

    })

    it('isEmpty Method Test', ()=> {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
        stack.push(1998);
        expect(stack.isEmpty()).toEqual(false);

    })
})