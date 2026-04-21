class Solution {
    getSecondLargest(arr) {
        // code here
        let n = arr.length;
        let largest = -1, secondLargest = -1;
        for (let i = 0; i < n; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] < largest && arr[i] > secondLargest) {
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }
}