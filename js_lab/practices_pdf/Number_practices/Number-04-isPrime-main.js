function isPrime(n) {
  //validate args
  if (typeof n !== 'number' || n <= 0 || n >= 100000) return false;

  //process
  if (n < 2) return false;

  if (n === 2) return true;

  for (let index = 2; index <= Math.sqrt(n); index++) {
    if (n % index === 0) return false;
  }
  return true;
}

[
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
].forEach((number) => {
  console.log(isPrime(number));
});
