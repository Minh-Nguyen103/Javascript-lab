function findSumPair(numberList, targetSum) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length < 2 || typeof targetSum !== 'number')
    return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  const result = [];
  let flag = false;
  for (let index = 0; index < numberList.length; index++) {
    for (let search = index + 1; search < numberList.length; search++) {
      if (numberList[index] + numberList[search] === targetSum) {
        result.push(numberList[index]);
        result.push(numberList[search]);
        flag = true;
      }
    }
    if (flag) break;
  }

  return result.sort((a, b) => a - b);
}

console.log(findSumPair([2, 3, 4, 5, 2, 6, 5], 10));
