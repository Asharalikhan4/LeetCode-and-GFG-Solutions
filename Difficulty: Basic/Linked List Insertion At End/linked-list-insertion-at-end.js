/**
 * @param {Node} head
 * @param {number} x
 * @returns {Node}

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    insertAtEnd(head, x) {
        // code here
        const newNode = new Node(x);
        if(head === null) {
            head = newNode;
            return head;
        }
        let temp = head;
        while(temp.next !== null) {
            temp = temp.next
        }
        temp.next = newNode;
        return head;
    }
}