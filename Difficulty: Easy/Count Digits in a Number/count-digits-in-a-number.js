/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    countDigits(n) {
        /*
        Approach 1: Convert the number to the sting and return the length of that string.
        Approach 2: We use recursion, at first we check if given input is 0 we return 1 as it's length, and if not then in the recursion we keep calling the same function with input/10 adn +1 with a base case of if n==0 return 0;
        */
        
        // code here
        
        // Approach 1
        /*
        return String(n).length;
        */
        
        // Approach 2
        n = Math.abs(n);
        if(n == 0) return 1;
        return this._recursiveCount(n);
    }
    
    _recursiveCount(n) {
        if(n == 0) return 0;
        return 1 + this._recursiveCount(Math.floor(n/10));
    }
}