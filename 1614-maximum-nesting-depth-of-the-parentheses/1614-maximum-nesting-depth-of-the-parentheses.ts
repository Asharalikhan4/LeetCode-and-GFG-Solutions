function maxDepth(str: string): number {
    let maxDepth: number = 0, currentDepth: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      currentDepth++;
    } else if (str[i] === ')') {
      currentDepth--;
    }
    if (currentDepth > maxDepth) {
      maxDepth = currentDepth;
    }
  };
  return maxDepth;
};