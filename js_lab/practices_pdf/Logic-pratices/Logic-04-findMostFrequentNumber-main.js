function findMostFrequentNumber(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  if (numberList.some((number) => typeof number !== 'number')) return undefined;

  //process
  const countNumberOfAppear = numberList.reduce((obj, currentNumber) => {
    const element = (obj[' ' + currentNumber] || 0) + 1;
    obj[' ' + currentNumber] = element;
    return obj;
  }, {});

  let mostFrequentNumber;
  let maxAppear = 0;
  let entries = Object.entries(countNumberOfAppear);

  entries.forEach(([key, value]) => {
    if (maxAppear < value) {
      mostFrequentNumber = Number.parseFloat(key);
      maxAppear = value;
    }
  });

  return mostFrequentNumber;
}

console.log(findMostFrequentNumber([3, 2, 2, 3]));
console.log(findMostFrequentNumber([2, 2, 3, 99, 3, 2, 3, 2, 99, 3, 3]));
