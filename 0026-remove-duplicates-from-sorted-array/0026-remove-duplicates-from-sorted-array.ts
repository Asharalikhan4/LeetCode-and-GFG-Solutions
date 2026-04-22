function removeDuplicates(nums: number[]): number {
  let i:number = 0, n:number = nums.length;
  for (let j = 1; j < n; j++) {
    if (nums[i] != nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  return i + 1;
};