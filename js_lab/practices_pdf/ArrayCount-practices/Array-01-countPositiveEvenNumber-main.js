function countPositiveEvenNumber(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  if (numberList.some((number) => typeof number !== 'number')) return 0;

  //process
  return numberList.filter((number) => number > 0 && number % 2 === 0).length;
}

console.log(countPositiveEvenNumber([-2, -1, 0, 1, 2, 4, 8, true]));
