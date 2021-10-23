function partition(numberList, left, right) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left;
  let j = right;

  while (i <= j) {
    while (numberList[i] < pivot) i++;

    while (numberList[j] > pivot) j--;

    if (i < j) {
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }
    if (i <= j) {
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(numberList, left, right) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  //process
  if (left >= right) return numberList;

  const pivotPosition = partition(numberList, left, right);

  quickSort(numberList, left, pivotPosition - 1);
  quickSort(numberList, pivotPosition, right);

  return numberList;
}

console.log(quickSort([5, 3, 1, 2, 7], 0, 4));

/**
 * Start
 * qs([5,3,1,2,7], 0 4)
 * const pivotPosition = partition([5,3,1,2,7], 0 4)
 *
 * Start partition([5,3,1,2,7], 0 4)
 * mid = 2, pivot = 5, i = 0 , j = 4
 * chạy while
 * i = 0, j = 3
 * i < j -> swap [1,3,5,2,7]
 * i++, j-- -> i = 1, j = 2;
 * return i= 1
 * End
 *
 * pivotPosition = 1
 * qs([1,3,5,2,7], 0 , 0); return [1,3,5,2,7]
 * qs([1,3,5,2,7], 1, 4)
 * Start
 * const pivotPosition = partition([1,3,5,2,7], 1, 4)
 *
 * Start partition([1,3,5,2,7], 1, 4)
 * mid = 2, pivot = 5, i = 1 , j = 4
 * chạy while
 * i = 2, j = 3
 * i < j -> swap [1,3,2,5,7]
 * i++, j-- -> i = 3, j = 2;
 * return i= 3
 * End
 *
 * pivotPosition = 3;
 * qs([1,3,2,5,7],1,2)
 * Start
 * const pivotPosition = partition([1,3,2,5,7], 1, 2)
 *
 * Start partition([1,3,2,5,7], 1, 2)
 * mid = 1, pivot = 3, i = 1 , j = 2
 * chạy while
 * i = 1, j = 2
 * i < j -> swap [1,2,3,5,7]
 * i++, j-- -> i = 2, j = 1;
 * return i= 2
 * End
 *
 * pivotPosition = 2;
 * qs([1,2,3,5,7], 1, 1) return
 * qs(..., 2,2) return
 * End
 *
 * qs([1,2,3,5,7], 3,4)
 * Start
 * const pivotPosi = partitione([1,2,3,5,7],3,4)
 *
 * Start partitione([1,2,3,5,7],3,4)
 * mid = 3, pivot = 5, i = 3 , j = 4
 * chạy while
 * i = 3, j = 3
 * i = j -> no-swap
 * i++, j-- -> i = 4, j = 2;
 * return i= 4
 * End
 *
 * pivotPosi = 4;
 * qs(...,3,3)return
 * qs(...,4,4) return
 * End
 **
 */
