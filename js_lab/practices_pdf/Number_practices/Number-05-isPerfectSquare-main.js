function isPerfectSquare(n) {
  //validate args
  if (typeof n !== 'number' || n <= 0 || n >= 1000000) return false;

  //process
  if (Math.trunc(Math.sqrt(n)) === Math.sqrt(n)) return true;

  return false;
}

[4, 9, 16, 25, 36, 225, 289, 576].forEach((number) => {
  console.log(isPerfectSquare(number));
});
console.log(Math.sqrt(15));
