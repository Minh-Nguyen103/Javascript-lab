function findLastPerfectSquare(numberList) {
  //  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  if (numberList.some((number) => typeof number !== 'number')) return undefined;

  //process
  let perfectSquareNumber;

  for (let index = 0; index < numberList.length; index++) {
    if (Math.trunc(Math.sqrt(numberList[index])) === Math.sqrt(numberList[index])) {
      perfectSquareNumber = numberList[index];
    }
  }

  return perfectSquareNumber;
}

console.log(findLastPerfectSquare([4, 9, 16, 56, 36, 33, 44, 144, 10]));
console.log(findLastPerfectSquare([2, 3, 5, 7, 8]));
