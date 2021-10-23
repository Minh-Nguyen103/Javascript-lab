function findAllNumbers(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  const mapNumberList = numberList.map((number) => `${number}`);

  let allNumbers = [];

  for (let index = 0; index < mapNumberList.length; index++) {
    if (Number.parseInt(mapNumberList[index][0]) % 2 !== 0)
      allNumbers.push(Number.parseFloat(mapNumberList[index]));
  }

  return allNumbers;
}

console.log(findAllNumbers([07, 9.17, 678, 1, 34, 65, 267, 776]));
