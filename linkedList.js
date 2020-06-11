class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;   //Dont make this mistake (DONT write this.next = null)
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        console.log(`We are prepending ${data}`);
        this.head = new LinkedListNode(data, this.head)
        this.size++; //because we added one node 
    }

    append(data) {
        console.log(`We are appending ${data}`);
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
        this.size++; //because we added one node 
    }

    delete(data) {
        console.log(`We are deleting ${data}`);
        console.log('*_________________________________________________*');
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--; //As a node is removed
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.size--; //As a node is removed
                return;
            }
            current = current.next;
        }
    }

    //INDEX RELATED METHODS

    insertAt(data, index) { // rk ==> Here inserting is nothing but adding a new node at a spot  without deleting any of the previous nodes.
        // IF index is out of range
        console.log(`Inserting ${data} at position ${index}`)
        if (index > 0 && index > this.size) {
            return; //Dont do anything
        }

        //If 0th index
        if (index === 0) {
            this.head = new Node(data, this.head);  // OR this.prepend(data);
            return;   //IF AT ALL YOU WONDER WHY empty return here.
            //   Reason is once the task in above line of code is done , to return out of this method without any return value.
            //  MEans the code in next lines should not be done.
        }

        const node = new LinkedListNode(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current; //Node before index
            count++;
            current = current.next; // Node after index
        }
        node.next = current;
        previous.next = node;
        this.size++; //because we added one node 
    }    // rk ==> So what we are doing here is if we want to add 'a' at 3rd index 
    // ==> we change the [ third.next = fourth ] to [third.next = insertingNode] 
    // ==> Also [ insertingNode.next = fourth ]
    //U can also include the logic to get the last element if you request for the index greater than size

    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
        return null; // return; is same as return null;
        //U can also include the logic to get the last element if you request for the index greater than size
    };

    removeAt(index) {
        console.log(`Removing from position ${index}`)
        if (index > 0 && index > this.size) {
            return;
        }
        let current, previous;
        current = this.head;
        let count = 0;
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
        }
        this.size--; //As a node is removed
    };

    // Clear list  //But it kinda still has those in memory
    clearList() {
        this.head = null;
        this.size = 0;
    }

    printMyList(string) {
        let current = this.head;
        console.log(string);
        console.log(`Size: ${this.size}`)
        console.log(`Head: [data: ${this.head && this.head.data ? this.head.data : null}, next: ${this.head && this.head.next && this.head.next ? this.head.next.data : null}]`)
        let count = 0; //Just to know which index is the element
        while (current) {
            console.log(`INDEX: ${count} :: [ data: ${current.data} , next: ${current.next && current.next.data ? current.next.data : null}]`);
            count++;
            current = current.next;
        }
        console.log('*_________________________________________________*');

    }

    deleteHead() {
        if(!this.head) {
            return null;
        }
        const deletedHead = this.head;

        if(this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }
        this.size--; //As a node is removed
        return deletedHead; //This is because you need to return what value is delted from the linkedlist.
    }
}

// const ll = new LinkedList();
// ll.prepend(10);
// ll.append(20);
// ll.append(30);
// ll.append(40);
// ll.append(50);
// ll.append(60);

// ll.printMyList('Before deleting');

// ll.delete(30);
// ll.getAt(2);
// ll.removeAt(3);
// ll.printMyList('After changing');
// console.table(JSON.stringify(ll));

module.exports = LinkedList;