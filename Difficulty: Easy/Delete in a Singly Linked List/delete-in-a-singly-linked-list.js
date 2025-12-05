/*
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {Node}
 */

class Solution {
    deleteNode(head, x) {
        // code here
        if(head == null || x == 0){
	        return head;
	    }
        if(x === 1) {
            head = head.next;
            return head;
        }
        let temp = head;
        for(let i = 1; i < x - 1; i++){
            temp = temp.next;
        }
        temp.next = temp.next.next;
        return head;
    }
}