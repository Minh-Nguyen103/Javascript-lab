function findSecondLargestNumber(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length <= 1) return undefined;

  if (numberList.some((number) => typeof number !== 'number')) return undefined;

  //process
  let firstNumberMax;
  let secondNumberMax;

  if (numberList[0] > numberList[1]) {
    firstNumberMax = numberList[0];
    secondNumberMax = numberList[1];
  } else {
    firstNumberMax = numberList[1];
    secondNumberMax = numberList[0];
  }

  for (let index = 2; index < numberList.length; index++) {
    if (numberList[index] > firstNumberMax) {
      const remain = firstNumberMax;
      firstNumberMax = numberList[index];
      secondNumberMax = remain;
    } else if (numberList[index] > secondNumberMax) {
      secondNumberMax = numberList[index];
    }
  }

  return secondNumberMax;
}

console.log(findSecondLargestNumber([1, 4, 5, 6, 8, 0, 12, 23, 56, 87, 66, 55]));
