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
        if (this.head) {
            this.head.previous = newNode; // If head exists, make a new head and make (old head's previous === newHead)
        }
        this.head = newNode;  // Make the new node head. (If head exists or not exists, you create a head)

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(data) {
        const newNode = new DoublyLinkedListNode(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;   // This will simply return EXIT you off from this method
        }

        //If head exists !!

        this.tail.next = newNode;   //Earlier its next was null, so now since we append, we add a next element (new tail)

        //Define the newNode to be appended
        newNode.previous = this.tail;  // Attach new tail's prevois to old tail
        this.tail = newNode;  //This is the new tail which has previous value = old tail's value
        return this;
    }

    delete(data) {
        console.log(`We are deleting ${data}`);
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.head.previous = null;  //Making the newly turened head's previous value = null (As earlier it eas not head , it had a a previous)
            return;
        }
        if (this.tail.data === data) {
            this.tail = this.tail.previous;
            this.tail.next = null;  //Making the newly turened tail's next value = null (As earlier it eas not tail , it had a a next)
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next.next.previous = current;
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    printMyList(string) {
        let current = this.head;
        console.log(string);
        while (current) {
            console.log(`[ previous: ${current.previous && current.previous.data ? current.previous.data : null}, ${current.data} , next: ${current.next && current.next.data ? current.next.data : null}]`);
            current = current.next;
        }
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

ll.delete(10);

ll.printMyList('After deleting');