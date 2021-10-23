function hasTwoDigitsWithSum(n, sum) {
  //validate args
  if (typeof n !== 'number' || n <= 9 || n >= 1000000 || !Number.isInteger(n)) return false;

  if (typeof sum !== 'number' || sum <= 0 || sum >= 19 || !Number.isInteger(sum)) return false;

  //process
  const nToString = n.toString();
  for (let index = 0; index < nToString.length - 1; index++) {
    for (let approach = index + 1; approach < nToString.length; approach++) {
      if (Number.parseInt(nToString[index]) + Number.parseInt(nToString[approach]) === sum)
        return true;
    }
  }
  return false;
}

[10, 101, 456, 89, 14567, 89124].forEach((number) => {
  console.log(hasTwoDigitsWithSum(number, 15));
});
