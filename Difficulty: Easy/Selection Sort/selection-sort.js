class Solution {
    /**
     * @param {number[]} arr
     * @returns {number[]}
     */
     
    swap(arr, minimum, i) {
        let temp = arr[minimum];
        arr[minimum] = arr[i];
        arr[i] = temp;
    };

    // Function to implement selection sort
    selectionSort(arr) {
        // your code here
        for(let i = 0; i <= arr.length - 2; i++) {
            let minimum = i;
            for(let j = i; j <= arr.length - 1; j++) {
                if(arr[j] < arr[minimum]) {
                    minimum = j;
                }
            }
            this.swap(arr, minimum, i)
        }
    }
}