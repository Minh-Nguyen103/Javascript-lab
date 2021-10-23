function sumAllDigits(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  if (numberList.some((number) => typeof number !== 'number')) return 0;

  //process;
  const strNumber = numberList.join('');

  let sum = 0;

  for (let index = 0; index < strNumber.length; index++) {
    if (strNumber[index] === '.') continue;
    sum += Number.parseFloat(strNumber[index]);
  }

  return sum;
}

console.log(sumAllDigits([123.4, 55]));
