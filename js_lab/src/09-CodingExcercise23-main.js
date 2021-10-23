/* Tính tổng trung bình của các số chẵn trong mảng
Viết hàm funcion calcAvgOfAllEvenNumbers(numberList) nhận vào 1 mảng số nguyên dương.
Trả về một con số duy nhất cho biết trung bình cộng của tất cả số sẵn có trong mảng, 
nếu kết quả là số thực thì làm tròn về số nguyên gần nhất.
Ví dụ:
-calcAvgOfAllEvenNumbers(1) --> 0 vì dữ liệu đầu vào không hợp lệ
-isAllPerfectNumbers([]) --> 0;
-isAllPerfectNumbers([1]) --> 0
-isAllPerfectNumbers([1,2]) --> 2
-isAllPerfectNumbers([1,2,4]) --> 3  vì có 2 số chẳn 2 + 4 = 6, trung bình cộng lấy 6 / 2 = 3
-isAllPerfectNumbers([1,2,4,8]) --> 5  vì có 3 số chẳn 2 + 4 + 8 = 14, trung bình cộng lấy 14 / 3 = 4.6(6), làm tròn thành 5

*/

function checkEvenNumber(number) {
  if (number % 2 === 0) return true;

  return false;
}

function calcAvgOfAllEvenNumbers(numberList) {
  //validate args
  if (!Array.isArray(numberList)) return 0;

  //process
  let countEvenNumber = 0;
  if (numberList.length === 0) return 0;

  let avg = numberList.reduce((sum, currentValue) => {
    if (checkEvenNumber(currentValue)) {
      countEvenNumber++;
      return sum + currentValue;
    } else {
      return sum;
    }
  }, 0);
  if (countEvenNumber === 0) return 0;
  avg = Math.round(avg / countEvenNumber);

  return avg;
}
