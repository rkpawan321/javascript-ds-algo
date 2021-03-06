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
        this.size = 0;
    }

    prepend(data) {
        console.log(`We are prepending ${data}`);
        const newNode = new DoublyLinkedListNode(data, this.head);
        if (this.head) {
            this.head.previous = newNode; // If head exists, make a new head and make (old head's previous === newHead)
        }
        this.head = newNode;  // Make the new node head. (If head exists or not exists, you create a head)

        if (!this.tail) {
            this.tail = newNode;
        }
        this.size++; //because we added one node 
        return this;
    }

    append(data) {
        console.log(`We are appending ${data}`);
        const newNode = new DoublyLinkedListNode(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size++; //because we added one node 
            return this;   // This will simply return EXIT you off from this method
        }

        //If head exists !!

        this.tail.next = newNode;   //Earlier its next was null, so now since we append, we add a next element (new tail)

        //Define the newNode to be appended
        newNode.previous = this.tail;  // Attach new tail's prevois to old tail
        this.tail = newNode;  //This is the new tail which has previous value = old tail's value
        this.size++; //because we added one node 
        return this;
    }

    delete(data) {
        console.log(`We are deleting ${data}`);
        console.log('*_________________________________________________*');
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.head.previous = null;  //Making the newly turened head's previous value = null (As earlier it eas not head , it had a a previous)
            this.size--; //As a node is removed
            return;
        }
        if (this.tail.data === data) {
            this.tail = this.tail.previous;
            this.tail.next = null;  //Making the newly turened tail's next value = null (As earlier it eas not tail , it had a a next)
            this.size--; //As a node is removed
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next.next.previous = current;
                current.next = current.next.next;
                this.size--; //As a node is removed
                return;
            }
            current = current.next;
        }
    }

    printMyList(string) {
        let current = this.head;
        console.log(string);
        console.log(`Size: ${this.size}`)
        console.log(`Head: [data: ${this.head.data}, next: ${this.head.next.data}]`);
        console.log(`Tail: [data: ${this.tail.data}, previous: ${this.tail.previous.data}]`);
        while (current) {
            console.log(`[ previous: ${current.previous && current.previous.data ? current.previous.data : null}, data: ${current.data} , next: ${current.next && current.next.data ? current.next.data : null}]`);
            current = current.next;
        }
        console.log('*_________________________________________________*');
    }

}

const ll = new DoublyLinkedList();
ll.prepend(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.append(50);
ll.append(60);

ll.printMyList('Before deleting');

ll.delete(30);

ll.printMyList('After deleting');