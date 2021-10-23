function partition(numberList, left, right) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left;
  let j = right;

  while (i <= j) {
    //find the first item that greater than pivot
    while (numberList[i] < pivot) i++;

    //find the first item that smaller than pivot
    while (numberList[i] > pivot) j--;

    if (i < j) {
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }

    //MUST HAVE
    i++;
    j--;
  }

  return i;
}

function quickSort(numberList, left, right) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  //process

  //base condition / termination point
  if (left >= right) return numberList;

  const pivotPosition = partition(numberList, left, right);

  quickSort(numberList, left, pivotPosition - 1);
  quickSort(numberList, pivotPosition, right);

  return numberList;
}
console.log(quickSort([5, 3, 1, 2, 7], 0, 4));
// console.log(quickSort([1, 2, 1], 0, 2));

//[5,3,1,2,7], 0, 4
//i = 0, j = 4, pivot = 1, mid = 2
/**
 * i= 0, j = 3 [2,3,1,5,7]
 * i = 1, j =2
 * i = 1, j = 2 [ 2,1,3,5,7]
 * i = 2 , j = 1
 * return pivot = 2;
 *
 * qs(nbl, 0 , 1)
 * [2,1,3,5,7] i = 0 , j = 1; pivot = 2, mid = 0
 * i = 0 , j = 1 [1,2,3,5,7];
 * i = 1 , j = 0
 * return pivot = 1
 *
 * qs(0,0) return
 * qs(1,1) return
 *
 * qs(nbl,2,4)
 * [1,2,3,5,7] i = 2 , j = 4, pivot = 5, mid = 3
 * i = 3, j = 3,
 * i = 4, j = 2
 * return pivot = 4
 *
 * qs(nbl, 2,3)
 * [1,2,3,5,7] i = 2 , j = 3, pivot = 3, mid = 2
 * i = 2, j = 2
 * i = 3, j = 1;
 * return pivot = 3
 *
 * qs(2,2) return ;
 * qs(3,3) return;
 *
 * qs(nbl, 4,4) return;
 *
 *
 *
 *
 *
 */
/**
 * [2,3,1,5,7]
 * [2,1,3,5,7]
 * i = 0 , j= 1 [1,2,3,5,7]
 * i = 1, j = 0
 * i = 2, j = 4 , pivot = 5, idx = 3,
 * i= 3, j = 3
 * i = 4, j = 2
 * po= 3
 */

console.table([
  {
    name: 'A',
    age: '21',
  },
  {
    name: 'B',
    city: 'Bien Hoa',
  },
]);
