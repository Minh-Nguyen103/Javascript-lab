function generatePrimeNumber(n) {
  //validate args
  if (typeof n !== 'number' || n <= 2 || n >= 1000) return [];

  //process
  let arr = Array.from({ length: n }, (_v, idx) => idx);
  let primeArr = arr.filter((primeNumber) => {
    if (primeNumber < 2) return false;

    if (primeNumber === 2) return true;

    for (let index = 2; index <= Math.sqrt(primeNumber); index++) {
      if (primeNumber % index === 0) return false;
    }
    return true;
  });

  return primeArr;
}

console.log(generatePrimeNumber(2));
