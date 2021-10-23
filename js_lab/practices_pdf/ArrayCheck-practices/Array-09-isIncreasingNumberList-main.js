function isIncreasingNumberList(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  if (numberList.some((number) => typeof number !== 'number')) return false;

  //process
  let nextNumber;
  for (let index = 0; index < numberList.length - 1; index++) {
    nextNumber = numberList[index + 1];

    if (numberList[index] >= nextNumber) return false;
  }

  return true;
}

console.log(isIncreasingNumberList([3, 4, 67, 89, 90, 92, 93]));
