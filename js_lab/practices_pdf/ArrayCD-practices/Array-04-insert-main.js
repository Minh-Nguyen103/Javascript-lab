function insert(numberList, newNumber) {
  //validate args
  if (!Array.isArray(numberList) || typeof newNumber !== 'number') return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  const cloneNumberList = [...numberList];
  for (let index = 0; index < cloneNumberList.length; index++) {
    if (newNumber <= cloneNumberList[index]) {
      cloneNumberList.splice(index, 0, newNumber);
      break;
    }

    if (index === cloneNumberList.length - 1) {
      cloneNumberList.push(newNumber);
      break;
    }
  }

  return cloneNumberList;
}

console.log(insert([1, 2, 3], 1));
