class Solution {
    getSecondLargest(arr) {
        // code here
        let largest = 0, secondLargest = 0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if(largest > arr[i] && arr[i] > secondLargest) {
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }
}