function findAllNumbers(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length <= 1) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  let firstPositiveNumberEven = numberList.find((number) => number > 0 && number % 2 === 0);

  if (firstPositiveNumberEven === -1) return [];

  let allNumberArr = [];

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] === firstPositiveNumberEven) allNumberArr.push(numberList[index]);
  }

  allNumberArr.pop();
  return allNumberArr;
}

console.log(findAllNumbers([1, 2, 5]));
