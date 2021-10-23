function generateFibonaci(n) {
  //validate args
  if (typeof n !== 'number' || n <= 0 || n >= 1000) return [];

  //process
  if (n === 1) return [0];

  let fibonaciArr = [0, 1];
  let fibonaciNumber;

  for (let index = 2; ; index++) {
    fibonaciNumber = fibonaciArr[index - 1] + fibonaciArr[index - 2];

    if (fibonaciNumber < n) {
      fibonaciArr.push(fibonaciNumber);
    } else break;
  }

  return fibonaciArr;
}

console.log(generateFibonaci(1));
