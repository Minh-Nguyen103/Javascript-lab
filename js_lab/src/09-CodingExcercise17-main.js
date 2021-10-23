/* Kiểm tra số nguyên tố
Viết hàm funcion isPrime(n) nhận vào số nguyên dương (0 <= n < 1000) và trả về kết quả 
true/false cho biết đó có phải là số nguyên tố không ?
- Trả về nếu là số nguyên tố
- Ngược lại trả về false
Số nguyên tố là số chỉ chia cho 1 và chính 2, hay nói cách khác là chỉ có 2 ước số
là 1 và chính nó
Dãy số nguyên tố tham khảo 2,3,5,7,11,,13,17,...

Ví dụ: 
- isPrime(2) --> true
- isPrime(3) --> true
- isPrime(4) --> false

Hãy viết bài này bằng 2 cách
1.Cách 1 lặp từ 2 đến n-1 để kiểm tra isPrimeV1(n)
2.Cách 2 lặp từ 2 tới căn bậc 2 của n để kiểm tra isPrimeV2(n)
*/

// Using loop from 2 to n - 1
function isPrimeV1(n) {
  //Validate args
  if (typeof n !== 'number' || n < 2) return false;

  //process
  if (n === 2) return true;
  for (let index = 2; index < n; index++) {
    if (n % index === 0) return false;
  }
  return true;
}
console.log(isPrimeV1(2));
console.log(isPrimeV1(3));
console.log(isPrimeV1(11));
console.log(isPrimeV1(15));

// Using loop from 2 to square root of n
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
console.log(isPrimeV2(2));
console.log(isPrimeV2(3));
console.log(isPrimeV2(11));
console.log(isPrimeV2(15));
