function isPerfectNumber(n) {
  //validate args
  if (typeof n !== 'number' || n <= 1 || n >= 1000000) return false;

  //process
  const divisorList = [1];

  //tìm ước số của n
  for (let index = 2; index < Math.sqrt(n); index++) {
    if (n % index === 0) {
      divisorList.push(index);
      if (index * index !== n) divisorList.push(n / index);
    }
  }

  const sumDivisor = divisorList.reduce((sum, currentDivisor) => {
    sum += currentDivisor;
    return sum;
  }, 0);

  return sumDivisor === n;
}

[5, 567, 345, 128, 89].forEach((number) => {
  console.log(isPerfectNumber(number));
});
