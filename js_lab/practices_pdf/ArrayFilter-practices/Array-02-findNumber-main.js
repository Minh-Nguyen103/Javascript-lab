function findNumber(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length <= 1) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  let result = [];

  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index] > numberList[index - 1]) result.push(numberList[index]);
  }

  return result;
}

console.log(findNumber([2, 5, 4, 8]));
