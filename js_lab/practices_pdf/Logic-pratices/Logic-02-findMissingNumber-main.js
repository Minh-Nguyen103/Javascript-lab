function findMissingNumber(numberList, n) {
  //validate args
  if (!Array.isArray(numberList)) return -1;

  if (numberList.some((number) => typeof number !== 'number')) return -1;

  //Situation: every number only appear
  const countNumberOfAppear = numberList.reduce((obj, currentNumber) => {
    const element = (obj[currentNumber] || 0) + 1;
    obj[currentNumber] = element;
    return obj;
  }, {});

  const entriesArr = Object.values(countNumberOfAppear); //[2,1,1]

  console.log('huhuhu');
  if (entriesArr.some((number) => number !== 1)) return -1;

  //process
  const fulllNumberArr = Array.from({ length: n - 5 + 1 }, (_v, idx) => 5 + idx);

  //Situation: Missing a number in array
  console.log('hihihi');
  if (fulllNumberArr.length - numberList.length !== 1) return -1;

  //Stituation: Array includes number in range [5..n]
  console.log('hohoho');
  if (numberList.some((number) => !fulllNumberArr.includes(number))) return -1;

  //Find missing number
  console.log('hahah');
  for (let index = 0; index < fulllNumberArr.length; index++) {
    if (fulllNumberArr[index] !== numberList[index]) return fulllNumberArr[index];
  }
}

console.log(a);
console.log(findMissingNumber([5, 6, 8, 9], 9)); ////[5,6,7,8,9]
