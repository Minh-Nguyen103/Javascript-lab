function mostFrequent(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  for (let index = 0; index < numberList.length; index++) {
    if (Number.isNaN(Number.parseInt(numberList[index]))) return undefined;
  }

  //process

  const frequentObj = numberList.reduce((obj, currentNumber) => {
    obj[currentNumber] = (obj[currentNumber] || 0) + 1;
    return obj;
  }, {});
  console.log(frequentObj);
  let result = numberList[0];
  let resultCount = frequentObj[numberList[0].toString()];
  for (const key in frequentObj) {
    if (resultCount < frequentObj[key]) {
      resultCount = frequentObj[key];
      result = Number.parseInt(key);
    }
  }

  return result;
}

console.log(mostFrequent([3, 2, 2, 3]));
console.log(mostFrequent([2, 1, 3]));
console.log(mostFrequent([2, 2, 99, 99, 2, 99, 99]));

function mostFrequentV1(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  for (let index = 0; index < numberList.length; index++) {
    if (Number.isNaN(numberList[index])) return undefined;
  }

  //process
  var modeMap = {};
  var maxEl = numberList[0],
    maxCount = 1;
  for (var i = 0; i < numberList.length; i++) {
    var el = numberList[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}
