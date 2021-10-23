function removeDuplicatedNumbers(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  const cloneNumberList = [...numberList];

  if (cloneNumberList.length === 1) return cloneNumberList;

  const objNumberList = cloneNumberList.reduce((obj, currentNumber) => {
    const element = (obj[' ' + currentNumber] || 0) + 1;

    obj[' ' + currentNumber] = element;

    return obj;
  }, {});

  console.log(objNumberList);
  const KeyValueArr = Object.entries(objNumberList);
  const result = [];

  KeyValueArr.forEach(([key, value]) => {
    if (value === 1) result.push(Number.parseFloat(key));
  });

  return result;
}

//{  '2': 5, '3': 2, '4': 1, '1': 1 }
console.log(removeDuplicatedNumbers([2, 3, 2, 2, 2, 3, 4, 2, 1]));

function removeDuplicatedNumbersV1(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  const cloneNumberList = [...numberList];

  if (cloneNumberList.length === 1) return cloneNumberList;

  let result = [];
  let count = 0;

  for (let index = 0; index < numberList.length; index++) {
    for (let search = index + 1; search < numberList.length; search++) {
      if (numberList[index] === numberList[search]) {
        cloneNumberList[search] = '';
        count++;
      }
    }

    if (count !== 0) cloneNumberList[index] = '';
    count = 0;
    console.log(cloneNumberList);
  }
  console.log(cloneNumberList);
  return cloneNumberList.filter((number) => number !== '');
}

console.log(removeDuplicatedNumbersV1([1, 2, 3, 2, 2, 3, 1, 4]));

function removeDuplicatedNumbersV2(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  const cloneNumberList = [...numberList];

  if (cloneNumberList.length === 1) return cloneNumberList;

  let result = [];

  numberList.forEach((number, idx) => {
    cloneNumberList[idx] = '';

    if (!cloneNumberList.includes(number)) {
      result.push(number);
    }
    cloneNumberList[idx] = number;
  });

  return result;
}

console.log(removeDuplicatedNumbersV2([1, 2, 3, 2, 3]));

function removeDuplicatedNumbersV3(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  const cloneNumberList = [...numberList];

  if (cloneNumberList.length === 1) return cloneNumberList;

  let flag = false;

  for (let index = 0; index < cloneNumberList.length; ) {
    for (let search = cloneNumberList.length - 1; search > index; search--) {
      if (cloneNumberList[index] === cloneNumberList[search]) {
        cloneNumberList.splice(search, 1);

        flag = true;
      }
    }

    if (flag === true) {
      cloneNumberList.splice(index, 1);
    } else index++;

    flag = false;
  }

  return cloneNumberList;
}

// console.log(removeDuplicatedNumbersV3([1, 2, 3, 1, 2, 2, 1, 2, 3, 5, 2, 5, 9]));
console.log(removeDuplicatedNumbersV3([1, 1, 1, 1]));
