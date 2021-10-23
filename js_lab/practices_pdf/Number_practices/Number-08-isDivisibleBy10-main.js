function isDivisibleBy10(n) {
  //validate args
  if (typeof n !== 'number' || n < 10 || n >= 1000000 || !Number.isInteger(n)) return false;

  //process
  const numberCharacterList = n.toString().split('');

  const sumResult = numberCharacterList.reduce((sum, currentCharacter) => {
    sum += Number.parseInt(currentCharacter);
    return sum;
  }, 0);

  return sumResult % 10 === 0;
}

[442, 1234, 55, 91, 123455, 199191, 721, 5221, 343, 811, 22222, 3331].forEach((number) => {
  console.log(isDivisibleBy10(number));
});
