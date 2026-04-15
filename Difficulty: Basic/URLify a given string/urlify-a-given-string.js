/**
 * @param {String} s
 * @returns {String}
 */
class Solution {
    URLify(s) {
        /*
        Approach 1. Iterate over string and keep on adding the string character and as soon as you encounter empty space add %20.
        Approach 2. Use string.replace which is a little old or you can with the new one string.replaceAll("". "")
        */
        // code here
        if(s.length == 0) return;
        let answer = "";
        for(let i = 0; i < s.length; i++) {
            if(s[i] == " ") {
                answer += "%20";
            } else {
                answer += s[i];
            }
        }
        return answer;
    }
}