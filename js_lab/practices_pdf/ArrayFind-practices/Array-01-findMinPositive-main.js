function findMinPositive(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  if (numberList.some((number) => typeof number !== 'number')) return undefined;

  //process
  const filterNumberList = numberList.filter((number) => number > 0);

  if (filterNumberList.length === 0) return undefined;

  let remaining = filterNumberList[0];

  filterNumberList.forEach((element) => {
    if (element < remaining) remaining = element;
  });

  return remaining;
}

console.log(findMinPositive([-1, -5]));
