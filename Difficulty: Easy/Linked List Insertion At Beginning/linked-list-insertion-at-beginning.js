/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    insertAtFront(head, x) {
        // Code here
        const newNode = new Node(x);
        if(head === null) {
            head = newNode;
            return head;
        }
        newNode.next = head;
        head = newNode;
        return head;
    }
}