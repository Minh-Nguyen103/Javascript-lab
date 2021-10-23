function findSumPair(numberList, targetSum) {
  //validate args
  if (!Array.isArray(numberList) || !Number.isInteger(targetSum)) return [];

  //process
  if (numberList.length === 0) return [];

  const result = [];
  for (let indexList = 0; indexList < numberList.length; indexList++) {
    for (let indexCheck = 0; indexCheck < numberList.length; indexCheck++) {
      if (indexCheck === indexList) continue;

      if (numberList[indexCheck] + numberList[indexList] === targetSum) {
        result.push(numberList[indexCheck]);
        result.push(numberList[indexList]);
        return result.sort((a, b) => {
          return a - b;
        });
      }
    }
  }
  return result;
}
