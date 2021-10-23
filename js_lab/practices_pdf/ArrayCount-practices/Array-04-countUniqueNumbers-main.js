// function countUniqueNumbers(numberList) {
//   //validate args
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//   if (numberList.some((number) => typeof number !== 'number')) return 0;

//   //process
//   const objNumber = numberList.reduce((obj, currentNumber) => {
//     const element = (obj[currentNumber] || 0) + 1;
//     obj[currentNumber] = element;
//     return obj;
//   }, {});

//   return Object.keys(objNumber).length;
// }

// console.log(countUniqueNumbers([1, 2, 2, 3, 1, 2, 4]));
// console.log(countUniqueNumbers([1]));

// function countUniqueNumbersV1(numberList) {
//   //validate args
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//   if (numberList.some((number) => typeof number !== 'number')) return 0;

//   //process
//   let onlyNumber = [];

//   for (let index = 0; index < numberList.length; index++) {
//     if (!onlyNumber.includes(numberList[index])) onlyNumber.push(numberList[index]);
//   }
//   console.log(onlyNumber);
//   return onlyNumber.length;
// }

// console.log(countUniqueNumbersV1([1, 2, 2, 3, 1, 2, 4]));
// console.log(countUniqueNumbersV1([1]));
