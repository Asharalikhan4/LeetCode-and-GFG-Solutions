/**
 * @param {string}s
 * @returns {string}
 */
class Solution {
    removeSpaces(s) {
        /*
        Approach 1. Iterate over string and store character in a variable which is not equal to empty space.
        Approach 2. use .replace(/ /g, "") or .replaceAll(" ", "") method to find and replace all the space with nothing.
        */
        
        // code here
        if(s.length == 0) return;
        // Approach 1 Implementation
        /*
        let answer = "";
        for(let i = 0; i < s.length; i++) {
            if(s[i] != " ") {
                answer += s[i];
            }
        }
        return answer;
        */
        
        
        // Approach 2 Implementation
        let answer = s.replace(/ /g, "");
        return answer;
    }
}
