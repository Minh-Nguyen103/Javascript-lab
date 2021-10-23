//non-recursion
function binarySearchV1(numberList, target) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0 || typeof target !== 'number')
    return -1;

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] > numberList[index + 1]) return -1;
  }
  //process
  let left = 0;
  let right = numberList.length - 1;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);

    if (numberList[mid] === target) return mid;

    if (target > numberList[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

//recursion
function binarySearchV2(numberList, target, left, rigth) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0 || typeof target !== 'number')
    return -1;

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] > numberList[index + 1]) return -1;
  }

  //process
  const mid = left + Math.trunc((right - left) / 2);

  if (numberList[mid] === target) return mid;

  if (target > numberList[mid]) return binarySearchV2(numberList, target, mid + 1, rigth);

  return binarySearchV2(numberList, target, left, mid);
}
