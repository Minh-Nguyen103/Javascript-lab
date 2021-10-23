/* Kiểm tra mảng có phải tất cả đều là số hoàn hảo không?
Viết hàm funcion isAllPerfectNumbers(numberList) nhận vào 1 mảng số nguyên dương.
Trả về true nếu tấ cả đều là số hoàn hảo, ngược lại trả về false
Ví dụ:
-isAllPerfectNumbers([]) --> false
-isAllPerfectNumbers([1,6]) --> false vì 1 không phải số hoàn hảo
-isAllPerfectNumbers([1,2,3]) --> false
-isAllPerfectNumbers([6]) --> true vì 6 là số hoàn hảo
-isAllPerfectNumbers([6,28]) --> true vì 6 và 228 là số hoàn hảo

Viết bằng 3 cách khác nhau:
1.isAllPerfectNumbersV1(numberList) Sử dụng for...i  với cách tiếp cận là return false
 nếu phát hiện có một số ko phải là số hoàn hảo.
2.isAllPerfectNumbersV2(numberList) Sử dụng reduce()  với cách tiếp cận là đếm số lượng số hoàn hảo,
 nếu nó bằng với length của array, nếu bằng thì return true, ngược lại return false
3.isAllPerfectNumbersV3(numberList) Sử dụng every().

*/

function isPerfectNumber(n) {
  // validate args
  if (typeof n !== 'number' || n < 1 || n > 1000 || n < 5) return false;

  //process
  if (n === 1) return true;

  const result = [1];
  //Tìm ước số của input truyền vào
  for (let index = 2; index < Math.sqrt(n); index++) {
    if (n % index === 0) {
      result.push(index);
      if (index * index !== n) result.push(n / index);
    }
  }

  //Tổng của các ước số
  const sumDivisor = result.reduce((sum, currentNumber) => {
    return sum + currentNumber;
  }, 0);

  return sumDivisor === n;
}

// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
  //validate args
  if (!Array.isArray(numberList)) return false;

  //process
  if (numberList.length === 0) return false;

  for (let index = 0; index < numberList.length; index++) {
    if (!isPerfectNumber(numberList[index])) return false;
  }

  return true;
}

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
  //validate args
  if (!Array.isArray(numberList)) return false;

  //process
  if (numberList.length === 0) return false;

  const countPerfectNumber = numberList.reduce((number, currentValue) => {
    if (isPerfectNumber(currentValue)) {
      return number + 1;
    } else {
      return number;
    }
  }, 0);

  return countPerfectNumber === numberList.length;
}

// every
function isAllPerfectNumbersV3(numberList) {
  //validate args
  if (!Array.isArray(numberList)) return false;

  //process
  if (numberList.length === 0) return false;

  return numberList.every(isPerfectNumber);
}
