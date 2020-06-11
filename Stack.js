//STACK METHODS
/* PUSH ==> pushing into a stack means prepending a value to the linkedlist */
/*POP ==> This is similar to deleting a head from the linked list */
/*PEEK ==> Just having a look at the recent most added element i.e., the head */

const LinkedList = require('./linkedList');

class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    };

    isEmpty() {
        return !this.linkedList.head;
    };

    peek() {
        if(!this.linkedList.head) {
            return null;
        }
        console.log(`Peeking the Stack :: ${this.linkedList.head.data}`)
        return this.linkedList.head.data;
    };

    push(data) {
        this.linkedList.prepend(data);
    };

    pop() {
        const removedHead = this.linkedList.deleteHead();
        console.log(`Popped ${removedHead ? removedHead.data : null} from the Stack`)
        return removedHead ? removedHead.data : null;
    };

    printStack(string = 'Stack') {  // default string for the method
        this.linkedList.printMyList(string);
    }
};

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);

myStack.printStack();
myStack.peek();
myStack.pop();

myStack.printStack('After modification')

