function bubbleSort(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  //process
  let swapped = true;
  let idx = 0;

  while (swapped) {
    swapped = false;
    for (let index = 0; index < numberList.length - idx; index++) {
      if (numberList[index] > numberList[index + 1]) {
        swap(numberList, index, index + 1);
        swapped = true;
      }
    }
    idx++;
  }

  return numberList;
}

function swap(numberList, leftElement, rightElement) {
  const temp = numberList[leftElement];
  numberList[leftElement] = numberList[rightElement];
  numberList[rightElement] = temp;
}

console.log(bubbleSort([29, 10, 14, 37, 14, 5, 50, 44]));
