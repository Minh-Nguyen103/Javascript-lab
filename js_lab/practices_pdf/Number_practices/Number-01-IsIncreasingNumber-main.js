function isIncreasingNumber(n) {
  //validate args
  if (typeof n !== 'number' || n < 10 || n > 1000000) return false;

  //process
  const increasingNumber = n.toString();
  for (let index = 1; index < increasingNumber.length; index++) {
    if (increasingNumber[index] <= increasingNumber[index - 1]) return false;
  }

  return true;
}
