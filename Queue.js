//Queue Methods
/* Enqueue ==> When a person comes and joins a queue in a movie theatre, the new person always stands in the last.
               Similarly Enqueueing a value to a queue is always an APPEND method*/
/* DEQUEUE ==> In an ideal condition, a person at the movie theatre queue, will leave the queue immediately after buying the tickets, which means the first person in the queue gets dequeued
               Similarly Dequeueing a node happens always from the head */
/*PEEK ==> Peeking a queue is having a look at the head of queue */

const LinkedList = require('./linkedList');

class Queue {
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
        console.log(`Peeking the Queue :: ${this.linkedList.head.data}`)
        return this.linkedList.head.data;
    };

    enqueue(data) {
        this.linkedList.append(data);
    };

    dequeue() {
        const removedHead = this.linkedList.deleteHead();
        console.log(`Dequeued ${removedHead ? removedHead.data : null} from the Queue`)
        return removedHead ? removedHead.data : null;
    };

    printQueue(string = 'Queue') {  // default string for the method
        this.linkedList.printMyList(string);
    }
};

const myQueue = new Queue();
 

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);
myQueue.printQueue();

myQueue.peek();
myQueue.dequeue();
myQueue.enqueue(60);
myQueue.printQueue('After modification');

