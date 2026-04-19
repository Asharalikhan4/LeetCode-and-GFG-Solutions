function isPalindrome(x: number): boolean {
    if(x < 0) return false;
    let originalNumber:number = x, reversedX:number = 0;
    while(x !== 0) {
        reversedX = reversedX*10+(x%10);
        x = Math.floor(x/10);
    }
    return originalNumber === reversedX;
};