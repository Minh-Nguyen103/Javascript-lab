function findMaxSumArray(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length < 2) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  let allIncreasingSubArr = [];
  let increasingSubArr = [];

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] < numberList[index + 1]) {
      increasingSubArr.push(numberList[index]);
      continue;
    } else {
      increasingSubArr.push(numberList[index]);
    }

    if (increasingSubArr.length > 1) {
      allIncreasingSubArr.push(increasingSubArr);
    }

    increasingSubArr = [];
  }

  if (allIncreasingSubArr.length === 0) return [];

  let maxSumArray = 0;

  let result = [];

  for (let index = 0; index < allIncreasingSubArr.length; index++) {
    const sumOfArr = sumOfArray(allIncreasingSubArr[index]);
    if (maxSumArray < sumOfArr) {
      maxSumArray = sumOfArr;
      result = allIncreasingSubArr[index];
    }
  }
  return result;
}

function sumOfArray(arr) {
  return arr.reduce((sum, currentNumber) => sum + currentNumber);
}

console.log(findMaxSumArray([1, 2, 3, 0, 2, 4]));
