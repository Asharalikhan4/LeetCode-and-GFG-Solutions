function numberOfSets(n: number, k: number): number {
    const MOD = 1000000007;

    const dp: number[] = new Array(n).fill(1);
    const prefixSums: number[] = new Array(n + 1).fill(0);

    for (let j = 0; j < n; j++) {
        prefixSums[j + 1] = (prefixSums[j] + dp[j]) % MOD;
    }

    for (let i = 0; i < k; i++) {
        dp[0] = 0;

        for (let j = 1; j < n; j++) {
            dp[j] = (dp[j - 1] + prefixSums[j]) % MOD;
        }

        prefixSums[0] = 0;

        for (let j = 0; j < n; j++) {
            prefixSums[j + 1] = (prefixSums[j] + dp[j]) % MOD;
        }
    }

    return dp[n - 1];
};