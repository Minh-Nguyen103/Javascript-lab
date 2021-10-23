// function uniqueArray(numberList) {
//   //validate args
//   if (!Array.isArray(numberList) || numberList.length === 0) return [];

//   if (numberList.some((number) => typeof number !== 'number')) return [];

//   //process
//   const cloneNumberList = [...numberList];

//   if (cloneNumberList.length === 1) return cloneNumberList;

//   let result = [];

//   numberList.forEach((number, idx) => {
//     // cloneNumberList[idx] = '';

//     if (!result.includes(number)) {
//       result.push(number);
//     }
//     // cloneNumberList[idx] = number;
//   });

//   return result;
// }

// console.log(uniqueArray([1, 1, 2, 2, 3, 3, 5]));

function uniqueArrayV1(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.some((number) => typeof number !== 'number')) return [];

  //process
  const cloneNumberList = [...numberList];

  if (cloneNumberList.length === 1) return cloneNumberList;

  let result = [];

  cloneNumberList.forEach((number, idx) => {
    for (let index = cloneNumberList.length - 1; index > idx; index--) {
      if (number === cloneNumberList[index]) cloneNumberList.splice(index, 1);
    }
  });

  return cloneNumberList;
}

console.log(uniqueArrayV1([1, 2, 3, 1, 2, 1, 2, 3, 5, 2]));
