function countCommas(n: number): number {
    let ans = 0;
    let threshold = 1000;

    while(threshold <= n) {
        ans += n - threshold + 1;
        threshold *= 1000;
    }

    return ans;
};