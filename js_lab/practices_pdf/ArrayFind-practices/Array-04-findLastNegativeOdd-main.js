function findLastNegativeOdd(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  if (numberList.some((number) => typeof number !== 'number')) return undefined;

  //process
  numberList.reverse();

  return numberList.find((number) => number % 2 !== 0 && number < 0);
}

console.log(findLastNegativeOdd([1, 2, -2, -9, -5, -4]));
