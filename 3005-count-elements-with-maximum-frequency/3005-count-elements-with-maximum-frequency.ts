function maxFrequencyElements(nums: number[]): number {
    // Approach -> Create a hashmap store the freq as value and number as the key, find the height value in map then iterate over map and check if any other value having the same freq, add all the freq which is equal to heighest freq and return it.
    let count: number = 0;
    let freqMap = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
    }
    const heighestFreq: number = Math.max(...freqMap.values());
    for(const [key, value] of freqMap) {
        if(value == heighestFreq) {
            count += value;
        }
    }
    return count;
};