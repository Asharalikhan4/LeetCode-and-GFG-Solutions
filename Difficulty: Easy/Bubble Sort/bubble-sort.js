/**
 * @param {number[]} arr
 */
class Solution {
    
    swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    };
    
    bubbleSort(arr) {
        // code here
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let swapped = false;
            for (let j = 0; j < n - 1 - i; j++) {
                if (arr[j + 1] < arr[j]) {
                    this.swap(arr, j, j + 1);
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }
}