//Linked List Traversal
function llTraversal1(linkedList, callback) {
    console.log('Traversing a linked list with a callback function');
    let currentNode = linkedList.head;
    
    while(currentNode) {
        callback(currentNode.data);
        currentNode = currentNode.next;
    }
}

//Linked List Traversal using RECURSION
function llTraversal2(linkedList, callback) {
    console.log('Traversing a linked list with a callback function using RECURSION');
    function traversalRecursive(node, callback) {
        if (node) {  //Base case for recursion
            callback(node.data);
            traversalRecursive(node.next, callback);      
        }
    };
    traversalRecursive(linkedList.head, callback);
}

//rk ==> reverseTraversal 0f LL  using RECURSION
//==> BASICALLY IT WORKS ON THE PRINCIPLE like ==> function adds into stack and gets executed later !!!
// For more information watch : https://youtu.be/K7J3nCeRC80?t=689

//Linked List REVERSE Traversal using RECURSION
function llReverseTraversal(linkedList, callback) {
    console.log('Reverse traversing a linked list with a callback function');
    function reverseTraversalRecursive(node, callback) {
        // console.log('node:' + JSON.stringify(node))
        if (node) {  //Base case for recursion
            reverseTraversalRecursive(node.next, callback);
            callback(node.data);
        }
    };
    reverseTraversalRecursive(linkedList.head, callback);
}

const LinkedList = require('./linkedList');

const ll = new LinkedList();
ll.prepend(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.append(50);
ll.append(60);

ll.printMyList('Printing my Linked List');

llTraversal1(ll, (data) => console.log(data * 10));

llTraversal2(ll, (data) => console.log(data * 10));

llReverseTraversal(ll, (data) => console.log(data * 10));


