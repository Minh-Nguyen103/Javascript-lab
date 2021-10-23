function countNumbers(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length <= 1) return 0;

  if (numberList.some((number) => typeof number !== 'number')) return 0;

  //process
  let prev = numberList[0];
  let count = 0;
  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index] < prev) count++;

    prev = numberList[index];
  }

  return count;
}

console.log(countNumbers([1, 2, 3, 2, 2, 7, 4, 3]));
