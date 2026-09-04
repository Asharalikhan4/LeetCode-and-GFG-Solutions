function firstStableIndex(nums: number[], k: number): number {
    // let max: number, min: number, n: number = nums.length, smallestStableIndex: number = Number.MAX_SAFE_INTEGER;
    // for(let i = 0; i < nums.length; i++) {
    //     max = Math.max(...nums.slice(0, i+1));
    //     min = Math.min(...nums.slice(i, n));
    //     if((max - min) <= k) {
    //         if(i < smallestStableIndex) {
    //           smallestStableIndex = i;
    //         }
    //     }
    // }
    // return smallestStableIndex === Number.MAX_SAFE_INTEGER ? -1 : smallestStableIndex;

    const n = nums.length;
    const suffixMin: number[] = new Array(n);
    suffixMin[n-1] = nums[n-1];
    for(let i = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(nums[i], suffixMin[i+1]);
    }

    let prefixMax = nums[0];
    for(let i = 0; i < n; i++) {
        prefixMax = Math.max(prefixMax, nums[i]);
        if(prefixMax - suffixMin[i] <= k) {
            return i;
        }
    }

    return -1;
};