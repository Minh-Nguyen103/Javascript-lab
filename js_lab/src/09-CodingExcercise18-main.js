/* Liệt kê ước số của số nguyên dương
Viết hàm funcion getDivisorList(n) nhận vào số nguyên dương (1 <= n <= 1000) và trả về 
một mảng các ước số của n 
Ví dụ: 
- getDivisorList(1) --> [1]
- getDivisorList(10) --> [1,2,5,10]
- getDivisorList(12) --> [1,2,3,4,6,12]

Hãy viết bài này bằng 3 cách
1.Sử dụng for...i từ 1 tới n getDivisorListV1(n)
2.Sử dụng Array.from() và filter() để lặp từ 1 tới n getDivisorListV2(n)
3.Sử dụng Array.from(), forEach() và sort().Đồng thời chỉ lặp đến căn bậc 2 của n getDivisorListV3(n)
*/

// using for...i to loop from 1 to n
function getDivisorListV1(n) {
  // validate args
  if (typeof n !== 'number' || n < 1 || n > 1000) return undefined;

  //process
  if (n === 1) return [1];
  let divisorList = [];
  for (let index = 1; index <= n; index++) {
    if (n % index === 0) divisorList.push(index);
  }
  return divisorList;
}

console.log(getDivisorListV1(1));
console.log(getDivisorListV1(10));
console.log(getDivisorListV1(12));

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  // validate args
  if (typeof n !== 'number' || n < 1 || n > 1000) return undefined;

  //process
  if (n === 1) return [1];
  let divisorList = Array.from({ length: n }, (_, i) => i + 1).filter((number) => {
    return n % number === 0;
  });

  return divisorList;
}
console.log(getDivisorListV2(1));
console.log(getDivisorListV2(10));
console.log(getDivisorListV2(12));
console.log(getDivisorListV2(16));

// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
  // validate args
  if (typeof n !== 'number' || n < 1 || n > 1000) return undefined;

  //process
  if (n === 1) return [1];
  const result = [];
  let rangeOfInput = Array.from({ length: Math.trunc(Math.sqrt(n)) }, (_, i) => i + 1).forEach(
    (value) => {
      if (n % value === 0) {
        result.push(value);
        if (value * value !== n) result.push(n / value);
      }
    }
  );
  return result.sort((a, b) => a - b);
}
console.log(getDivisorListV3(1));
console.log(getDivisorListV3(10));
console.log(getDivisorListV3(12));
console.log(getDivisorListV3(16));