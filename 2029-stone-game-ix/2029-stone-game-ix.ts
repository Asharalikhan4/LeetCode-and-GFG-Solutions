function stoneGameIX(stones: number[]): boolean {
    const count: number[] = Array(3).fill(0);
    for(const stone of stones) {
        count[stone % 3]++;
    };

    if(count[0] % 2 === 0) {
        return count[1] > 0 && count[2] > 0;
    };

    return Math.abs(count[1] - count[2]) >= 3;
};