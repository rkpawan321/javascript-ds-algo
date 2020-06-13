# javascript-ds-algo

Important code snippets for linked-list, doubly-linked-lists:
const node = new LinkedListNode(data);

FOR INDEXED
let current, previous;
// Set current to first
current = this.head;
let count = 0;
while (count < index) {
previous = current;

FOR NON-INDEXED
while (currentNode.next) {
currentNode = currentNode.next;
}

REMEMBER ==> Linked list has following memory locations 
1) Node [data, next]
2) Head Node (If you check the code, we are explicitly mentioning "this.head". Do not forget this.) 
Head only has the address of the first node.

ANY PROBLEM CAN HAVE 2 TYPES OF SOLUTION.
1) Iterative solution (non-recursive)
2) RECURSIVE solution.


Print elements of a linked list in reverse order using recursion (WITHOUT REVERSING THE LINKED -LIST)
Geeks for Geeks YT Link : https://youtu.be/bbbnyIDHeR8
mycodeschool : https://www.youtube.com/watch?v=K7J3nCeRC80

//rk ==> reverseTraversal 0f LL  using RECURSION
//==> BASICALLY IT WORKS ON THE PRINCIPLE like ==> all recursive functions one by one adds into stack and gets completely executed later !!!
// For more information watch : https://youtu.be/K7J3nCeRC80?t=689

Reverse a LinkedList : https://youtu.be/sYcOK51hl-A   ; https://wsvincent.com/javascript-reverse-linked-list/
Iterative Method ::
// rk ==> What we return in REVERSEaLINKEDLIST method as a reversed linked-list is technically the first node of the reversed linked list !!
To understand this, try printing the first node of the original linked list.
It looks like :::: 
{"data":10,"next":{"data":20,"next":{"data":30,"next":{"data":40,"next":{"data":50,"next":{"data":60,"next":null}}}}}}
Recursive method :: A recursive approach is more concise but takes up more space since functions accumulate on the call stack.
https://www.youtube.com/watch?v=KYH83T4q6Vs
RECURSION KINDA HELPS US FIRST TRAVERSE A LIST IN FORWARD DIRECTION, AND THEN AGAIN IN BACKWARD DIRECTION.
How after adding all recursive methods to stack, it comes back to last but one method and starts completing the function in stack. :: https://youtu.be/KYH83T4q6Vs?t=306
https://www.geeksforgeeks.org/reverse-a-linked-list/

Recursive Method:

   1) Divide the list in two parts - first node and 
      rest of the linked list.
   2) Call reverse for the rest of the linked list.
   3) Link rest to first.
   4) Fix head pointer













