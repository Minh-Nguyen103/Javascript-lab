function isIncreasingNumberByDistance(n, x) {
  //validate args
  if (typeof n !== 'number' || n < 10 || n > 1000000) return false;

  if (typeof x !== 'number' || x <= 0 || x >= 5) return false;

  //process
  const increasingNumber = n.toString();
  for (let index = 1; index < increasingNumber.length; index++) {
    if (increasingNumber[index] - increasingNumber[index - 1] !== x) return false;
  }

  return true;
}

// Array.from({ length: 10 }, (x, idx) => idx).forEach((number) => {
//   console.log(isIncreasingNumberByDistance(number, 5));
// });

[14, 56, 258, 147].forEach((number) => {
  console.log(isIncreasingNumberByDistance(number, 3));
});
