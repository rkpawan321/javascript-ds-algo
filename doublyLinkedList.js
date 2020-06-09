class DoublyLinkedListNode {
    constructor(data, next = null, previous = null) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(data) {
        const newNode = new DoublyLinkedListNode(data, this.head);
        if(this.head) {
            this.head.previous = newNode;
        }
        this.head = newNode;  // Make the new node head
    }

}