function findAllIncreasingSubArr(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length < 2) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  let AllIncreasingSubArr = [];
  let increasingSubArr = [];

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] < numberList[index + 1]) {
      increasingSubArr.push(numberList[index]);
      continue;
    } else {
      increasingSubArr.push(numberList[index]);
    }

    if (increasingSubArr.length > 1) {
      AllIncreasingSubArr.push(increasingSubArr);
    }

    increasingSubArr = [];
  }

  return AllIncreasingSubArr;
}

console.log(findAllIncreasingSubArr([2, 3, 1, 9, 90, 92, -5, -10, -8, -1, 9, 8, 9]));
console.log(findAllIncreasingSubArr([9, 6, 4, 1, 0]));
