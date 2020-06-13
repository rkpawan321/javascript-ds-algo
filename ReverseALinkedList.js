const LinkedList = require('./linkedList');

const ll = new LinkedList();
ll.prepend(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.append(50);
ll.append(60);

ll.printMyList('Printing my Linked List');

//To explain this method properly, 
console.log('Head of original Linked List : ', JSON.stringify(ll.head));


// For procedure watch : https://youtu.be/sYcOK51hl-A
// rk ==> What we return in this method as a reversed linked-list is technically the first node of the reversed linked list !!
function reverseALinkedListIterative(linkedlist) {
    let tempNode, currentNode, previousNode;

    currentNode = linkedlist.head;

    while (currentNode) {
        // save next before we overwrite currentNode.next!
        tempNode = currentNode.next;

        // reverse pointer
        currentNode.next = previousNode;

        //This is technically the first node of the reversed linked list !!
        previousNode = currentNode;

        //This is for the while loop's next true case
        currentNode = tempNode;

    }
    return previousNode;
};

// Recursive Method:

//    1) Divide the list in two parts - first node and 
//       rest of the linked list.
//    2) Call reverse for the rest of the linked list.
//    3) Link rest to first.
//    4) Fix head pointer

// O(n) time & O(n) space
function reverse(head) {
    console.log('head.next', head.next);
    if (!head || !head.next) {
        return head;
    }
    let tmp = reverse(head.next);
    head.next.next = head;   // //This line is similar to (head.next).next = head;
    head.next = null;
    return tmp;
}

function reverseALinkedListRecursive(linkedList) {
    console.log('linkedList.head', JSON.stringify(linkedList.head))
    reverse(linkedList.head);
};

// console.log('Iterative Method :: Reversed LL :', JSON.stringify(reverseALinkedListIterative(ll)));

console.log('Recursive Method :: Reversed LL :', JSON.stringify(reverseALinkedListRecursive(ll)));