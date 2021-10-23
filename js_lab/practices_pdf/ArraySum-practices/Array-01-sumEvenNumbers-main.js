function sumEvenNumbers(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length <= 1) return 0;

  if (numberList.some((number) => typeof number !== 'number')) return 0;

  //process;
  const evenNumber = [];
  let prev = numberList[0];

  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index] % 2 === 0 && numberList[index] > prev) evenNumber.push(numberList[index]);
    prev = numberList[index];
  }

  return evenNumber.reduce((sum, currentNumber) => {
    sum += currentNumber;
    return sum;
  }, 0);
}

console.log(sumEvenNumbers([-10, -4, 2, 6, 3, 4, 6, 6, 1, 9, 8, 10]));
console.log(sumEvenNumbers([-10, -4, 2, 8, 5]));
console.log(sumEvenNumbers([2, 8, 5, 4]));
