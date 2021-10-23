function findAllPositiveEvenSubArr(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process

  const allPositiveEvenSubArr = [];
  let positiveEvenSubArr = [];

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] % 2 === 0 && numberList[index] > 0) {
      positiveEvenSubArr.push(numberList[index]);
      if (numberList.length - 1 !== index) continue;
    }

    if (positiveEvenSubArr.length >= 1) allPositiveEvenSubArr.push(positiveEvenSubArr);

    positiveEvenSubArr = [];
  }

  return allPositiveEvenSubArr;
}

console.log(findAllPositiveEvenSubArr([1, 2, 3, -2, 4, 66, 77, 8, 9, 10]));
