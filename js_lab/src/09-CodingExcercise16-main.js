/* Liệt kê các số trong khoảng [a,b]
Viết hàm funcion createArrayInRange(a, b) để tạo ra mảng gồm các số trong khoảng a,b (có bao gồm
a và b)
Với a,b là các số thỏa mãn điều kiện sau: -100 < a < b < 100
Trả về là một array chứa các số trong khoảng từ a tới b 

Ví dụ: 
- createArrayInRange(1,5) --> [1,2,3,4,5]
- createArrayInRange(-2,1) --> [-2,-1,0,1]

Hãy viết bài này bằng 2 cách
1.Dùng for..i createArrayInRangeV1(a, b)
2.Dùng Array.from() createArrayInRangeV2(a, b)
*/

// using for...i
function createArrayInRangeV1(a, b) {
  //validate args
  if (a < -100 || b > 100 || a > b) return [];

  //process
  const newArr = [];
  for (let index = a; index <= b; index++) {
    newArr.push(index);
  }
  return newArr;
}

console.log(createArrayInRangeV1(1, 5));
console.log(createArrayInRangeV1(-2, 1));

// using Array.from()
function createArrayInRangeV2(a, b) {
  //validate args
  if (a < -100 || b > 100 || a > b) return [];

  //process
  const newArr = Array.from({ length: b - a + 1 }, (_, i) => a + i);
  return newArr;
}
console.log(createArrayInRangeV2(1, 5));
console.log(createArrayInRangeV2(-2, 1));
