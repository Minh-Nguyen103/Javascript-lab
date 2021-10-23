function findAllDecreasingSubArr(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length <= 2) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  const allDecreasingSubArr = [];
  let subArr = [numberList[0]];

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] > numberList[index + 1]) {
      subArr.push(numberList[index + 1]);
      continue;
    }

    if (subArr.length >= 3) allDecreasingSubArr.push(subArr);

    subArr = [numberList[index + 1]];
  }

  return allDecreasingSubArr;
}

console.log(
  findAllDecreasingSubArr([6, 4, 3, 2, 0, 90, 56, 78, 67, 55, 43, 44, 34, 22, 11, 33, 45])
);

console.log(findAllDecreasingSubArr([9, 8, 9, 2, 7, 8, 9, 5, 3]));
