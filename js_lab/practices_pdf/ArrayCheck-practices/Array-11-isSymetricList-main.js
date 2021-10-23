function isSymetricList(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  if (numberList.some((number) => typeof number !== 'number')) return false;

  //process
  if (numberList.length === 1) return true;

  const cloneNumberList = [...numberList];
  numberList.reverse();
  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] !== cloneNumberList[index]) return false;
  }

  return true;
}

console.log(isSymetricList([1, 2, 3, 1]));
