function findFirstPositiveEven(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  if (numberList.some((number) => typeof number !== 'number')) return undefined;

  //process

  return numberList.find((number) => number % 2 === 0 && number > 0);
}

console.log(findFirstPositiveEven([1, 3, 5, 2, 6]));
