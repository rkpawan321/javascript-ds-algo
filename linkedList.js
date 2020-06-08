class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;   //Dont make this mistake (DONT write this.next = null)
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    prepend(data) {
        this.head = new LinkedListNode(data, this.head)
    }

    append(data) {
        const newNode = new LinkedListNode(data)
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    delete(data) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    printMyList(string) {
        let current = this.head;
        console.log(string);
        while (current.next) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.prepend(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.append(50);
ll.append(60);

ll.printMyList('Before deleting');

ll.delete(30);

ll.printMyList('After deleting 30');
// console.table(JSON.stringify(ll));