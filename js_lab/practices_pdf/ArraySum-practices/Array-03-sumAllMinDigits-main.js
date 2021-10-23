function sumAllMinDigits(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  if (numberList.some((number) => typeof number !== 'number')) return 0;

  //process
  let minDigitArr = numberList.map((number) => {
    const strNumber = number.toString();
    let minDigit = Number.parseInt(strNumber[0]);

    for (let index = 1; index < strNumber.length; index++) {
      if (strNumber[index] === '.') continue;

      if (minDigit > Number.parseInt(strNumber[index]))
        minDigit = Number.parseInt(strNumber[index]);
    }

    return minDigit;
  });

  console.log(minDigitArr);
  return minDigitArr.reduce((sum, currentDigit) => {
    sum += currentDigit;
    return sum;
  }, 0);
}

console.log(sumAllMinDigits([123, 456, 2, 597, 23.1]));
