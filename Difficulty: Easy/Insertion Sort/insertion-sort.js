/**
 *
 * insert
 * @param {number[]} arr
 * @param {number} i
 *
 * insertionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution {
    
    swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    
    insertionSort(arr) {
        // code here
        let n = arr.length;
        for(let i = 0; i <= n - 1; i++) {
            let j = i;
            while(j > 0 && arr[j-1] > arr[j]){
                this.swap(arr, j-1, j);
                j--;
            } 
        }
    }
}