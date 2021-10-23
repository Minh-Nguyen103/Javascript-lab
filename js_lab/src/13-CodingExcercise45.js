/*Sắp xếp thứ tự giảm dần sử dụng bubble sort
Viết hàm bubbleSort(numberList) nhận vào danh sách số và trả về mảng được sắp xếp theo 
thứ tự giảm dần.
- Trường hợp numberList không phải mảng hoặc rỗng thì trả về mảng rỗng mới
- Trường hợp có sắp xếp, cần thực hiện trực tiếp trên mảng truyền vào, nên khi trả về,
vẫn trả về mảng lúc truyền vào, không phải mảng mới nhé. Hàm sort() của javascript cũng
làm như vậy nhé mn hihi.
 */

function bubbleSort(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  //process
  let swapped;
  let idx = 0;
  do {
    swapped = false;

    for (let index = 0; index < numberList.length - idx; index++) {
      if (numberList[index] < numberList[index + 1]) {
        //swap
        [numberList[index], numberList[index + 1]] = [numberList[index + 1], numberList[index]];
        swapped = true;
      }
    }
    idx++;
  } while (swapped);

  return numberList;
}

console.log(bubbleSort([5, 3, 1, 2, 7]));
