/* Biến đổi mảng với f(i) = f(i-1) + f(i+1)
Viết hàm funcion transformNumbersV1(numberList)  để biến đổi các số hiện tại của mảng numberList
thành các số mới theo công thức.
f(i) = f(i - i) + f(i + 1) với i là index
Tạm dịch nôm na là phần tử ở vị trí i sẽ bằng tổng của 2 phần tử bên cạnh.
Trường hợp đầu mảng và cuối mảng sẽ bằng phần tử liền kề.
Trường hợp mảng có ít hơn một phần tử thì sẽ giữ nguyên, không biến đổi.
Lưu ý: mảng trả về là một mảng mới, không phải là mảng truyền vào nhé!
Ví dụ: 
- transformNumbers([]) --> []
- transformNumbers([1]) --> [1]
- transformNumbers([5, 10]) --> [10, 5]
- transformNumbers([2, 4, 6, 8]) --> [4, 8, 12, 6] chú thích bên dưới

Đặt mảng đầu vào là a, mảng trả về là b, ta có:
- b[0] = a[1] = 4 (đầu mảng)
- b[1] = a[0] + a[2] = 2 + 6 = 8
- b[2] = a[1] + a[3] = 4 + 8 = 12
- b[3] = a[2] = 6 (cuối mảng)

Hãy viết bài này bằng 3 cách
1.Dùng for..i transformNumbersV1(numberList)
2.Dùng forEach() transformNumbersV2(numberList)
3.Dùng map() transformNumbersV3(numberList)
*/

// using for...i
function transformNumbersV1(numberList) {
  //validate args
  if (!Array.isArray(numberList)) return undefined;

  //process
  if (numberList.length <= 2) return [...numberList].reverse();

  const transformNumberList = [];
  for (let index = 0; index < numberList.length; index++) {
    if (index === 0) {
      transformNumberList[index] = numberList[index + 1]; //đầu mảng
      continue;
    }
    if (index === numberList.length - 1) {
      transformNumberList[index] = numberList[index - 1]; // cuối mảng
      continue;
    }
    transformNumberList[index] = numberList[index - 1] + numberList[index + 1];
  }

  return transformNumberList;
}
// console.log(transformNumbersV1([]));
// console.log(transformNumbersV1([1]));
// console.log(transformNumbersV1([5, 10]));
console.log(transformNumbersV1([2, 4, 6, 8]));

// using forEach()
function transformNumbersV2(numberList) {
  //validate args
  if (!Array.isArray(numberList)) return undefined;

  //process
  if (numberList.length <= 2) return [...numberList].reverse();

  const transformNumberList = [];
  numberList.forEach((number, index) => {
    let leftValue = numberList[index - 1] || 0;
    let rightValue = numberList[index + 1] || 0;
    transformNumberList.push(leftValue + rightValue);
  });
  return transformNumberList;
}
console.log(transformNumbersV2([]));
console.log(transformNumbersV2([1]));
console.log(transformNumbersV2([5, 10]));
console.log(transformNumbersV2([2, 4, 6, 8]));

// using map()
function transformNumbersV3(numberList) {
  //validate args
  if (!Array.isArray(numberList)) return undefined;

  //process
  if (numberList.length <= 2) return [...numberList].reverse();

  const transformNumberList = [];
  numberList.map((number, index) => {
    let leftValue = numberList[index - 1] || 0;
    let rightValue = numberList[index + 1] || 0;
    transformNumberList.push(leftValue + rightValue);
  });
  return transformNumberList;
}
console.log(transformNumbersV3([]));
console.log(transformNumbersV3([1]));
console.log(transformNumbersV3([5, 10]));
console.log(transformNumbersV3([2, 4, 6, 8]));