/* Kiểm tra số hoàn hảo
Viết hàm funcion isPerfectNumber(n) để kiểm tra n có phải số hoàn hảo hay không?
Với n thóa điều kiện 1 < n < 1000
Trả về true nếu đúng , ngược lại trả về false
Số hoàn hảo là số mà tổng của tất cả ước số ( không tính chính nó, tức 1 đến n-1) bằng
chính nó
Ví dụ: 
6 = 1 + 2 + 3
Gợi ý; không nhất thiết phải chạy tới (n-1) để tìm ra tất cả ước số của n
*/

function isPerfectNumber(n) {
  // validate args
  if (typeof n !== 'number' || n < 5 || n > 1000) return false;

  //process

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

console.log(isPerfectNumber(496));
