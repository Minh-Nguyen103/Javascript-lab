/* Kiểm tra mảng có chứa số nguyên tố không
Viết hàm funcion hasPrime(n) nhận vào 1 mảng số nguyên dương.
Trả về true nếu có ít nhất 1 số nguyên tố, ngược lại trả về false
Gợi ý: có thể tận dụng lại hàm kiểm tra số nguyên tố đã làm ở bài trước đó
Viết bằng 5 cách khác nhau:
1.Sử dụng for..i hasPrime1(n)
2.Sử dụng forEach() hasPrime2(n)
3.Sử dụng find() hasPrime3(n)
4.Sử dụng findIndex() hasPrime4(n)
5.Sử dụng some() hasPrime5(n)
*/

//hàm kiểm tra sổ nguyên tố
function isPrimeV2(n) {
  //Validate args
  if (typeof n !== 'number' || n < 2) return false;

  //process
  if (n === 2) return true;
  for (let index = 2; index <= Math.sqrt(n); index++) {
    if (n % index === 0) return false;
  }
  return true;
}

//  for...i
function hasPrimeV1(numberList) {
  //Validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  //process
  for (let index = 0; index < numberList.length; index++) {
    if (isPrimeV2(numberList[index])) return true;
  }
  return false;
}

console.log(hasPrimeV1([3, 4, 7]));
console.log(hasPrimeV1([4, 8, 7]));
console.log(hasPrimeV1([4, 8, 12]));
console.log('===========');

//  forEach
function hasPrimeV2(numberList) {
  //Validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  //process
  let isPrime = false
  numberList.forEach((number) => {
    if (isPrimeV2(number)) {
      isPrime = true;
    }
  });

  return isPrime;
}

console.log(hasPrimeV2([3,4,7]));
console.log(hasPrimeV2([4, 8, 7]));
console.log(hasPrimeV2([4,8,12]));
console.log('===========');

//  find
function hasPrimeV3(numberList) {
  //Validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  //process
  return numberList.find((number) => isPrimeV2(number)) !== undefined || false;
}

console.log(hasPrimeV3([3, 4, 7]));
console.log(hasPrimeV3([4, 8, 7]));
console.log(hasPrimeV3([4, 8, 12]));
console.log('===========');

//  findIndex
function hasPrimeV4(numberList) {
  //Validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  //process
  return numberList.find((number) => isPrimeV2(number)) >= 0 || false;
}

console.log(hasPrimeV4([3, 4, 7]));
console.log(hasPrimeV4([4, 8, 7]));
console.log(hasPrimeV4([4, 8, 12]));
console.log('===========');

//  some
function hasPrimeV5(numberList) {
  //Validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  //process
  return numberList.some((number) => isPrimeV2(number)) || false;
}

console.log(hasPrimeV5([3, 4, 7]));
console.log(hasPrimeV5([4, 8, 7]));
console.log(hasPrimeV5([4, 8, 12]));
console.log('===========');
