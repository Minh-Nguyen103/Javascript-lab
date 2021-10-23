function hasFibonaciNumber(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  if (numberList.some((number) => typeof number !== 'number')) return false;

  //process
  const fibonaciList = createFibonaciList();
  for (let index = 0; index < numberList.length; index++) {
    if (fibonaciList.includes(numberList[index])) return true;
  }
  return false;
}

function createFibonaciList() {
  let fibonaciList = [0, 1];
  let fibonaciNumber = 1;

  for (let index = 2; ; index++) {
    fibonaciNumber = fibonaciList[index - 2] + fibonaciList[index - 1];
    if (fibonaciNumber > 100) break;
    fibonaciList.push(fibonaciNumber);
  }
  return fibonaciList;
}
console.log(createFibonaciList());
console.log(hasFibonaciNumber([4, 5]));
