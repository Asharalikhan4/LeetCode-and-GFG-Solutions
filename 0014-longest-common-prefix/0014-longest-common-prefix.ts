function longestCommonPrefix(strArr: string[]): string {
    if (strArr.length === 0) {
    return ""
  };
  let smallestStr: string = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length < smallestStr.length) {
      smallestStr = strArr[i];
    }
  }
  let prefix:string = "", bool: boolean;
  for (let i = 0; i < smallestStr.length; i++) {
    bool = true;
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[j][i] !== smallestStr[i]) {
        bool = false;
        break;
      }
    }
    if (bool) {
      prefix += smallestStr[i];
    } else {
      return prefix;
    }
  }
  return prefix;
};