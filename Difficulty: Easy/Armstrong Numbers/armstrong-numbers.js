// User function Template for javascript

/**
 * @param {number} n
 * @returns {boolean}
 */

class Solution {
    armstrongNumber(n) {
        // code here
        if(n < 0) return false;
        let noOfDigits = String(n).length, lastDigit = 0, answer = 0, originalNumber = n;
        while(n !== 0) {
            lastDigit = n%10;
            answer += lastDigit ** noOfDigits;
            n = Math.floor(n/10)
        }
        return originalNumber == answer;
    }
}
