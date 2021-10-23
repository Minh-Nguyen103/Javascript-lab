function isSymetricNumber(n) {
  //validate args
  if (typeof n !== 'number' || n <= 1 || n >= 1000000) return false;

  //process
  const numberToString = n.toString();

  if (numberToString.length % 2 === 0) {
    for (let index = 0; index <= ~~(numberToString.length / 2); index++) {
      if (numberToString[index] !== numberToString[numberToString.length - (index + 1)])
        return false;
    }
    return true;
  }

  for (let index = 0; index < ~~(numberToString.length / 2); index++) {
    if (numberToString[index] !== numberToString[numberToString.length - (index + 1)]) return false;
  }
  return true;
}

[11, 12321, 123321, 45654, 3443, 98789, 567765, 908809].forEach((number) => {
  console.log(isSymetricNumber(number));
});
