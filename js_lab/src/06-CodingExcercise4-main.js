/* 
Viết hàm function getMaxDigit(n) {} để tìm ra chữ số lớn nhất của một số nguyên dương n (0 <= n < 1000)

Ví dụ:
- getMaxDigit(1) ---> 1
- getMaxDigit(12) ---> 2
- getMaxDigit(123) ---> 3
- getMaxDigit(921) ---> 9
Trường hợp dữ liệu không hợp lệ, nằm ngoài vùng cho phép của n thì trả về -1 
Lưu ý: không sử dụng vòng lặp.
*/

//CODE

function getMaxDigit(n) {
  //checking valid ...
  if (n < 0 || n >= 1000) return -1;

  //check
  switch (n.toString().length) {
    //n have 1 digits
    case 1: {
      return n;
      break;
    }
    //n have 2 digits
    case 2: {
      if (n % 10 >= Math.trunc(n / 10)) {
        return n % 10;
      } else {
        return Math.trunc(n / 10);
      }
      break;
    }
    //n have 3 digits
    case 3: {
      const ones = n % 10;
      const tens = Math.trunc((n % 100) / 10);
      const hundred = Math.trunc(n / 100);
      if (hundred >= tens && hundred >= ones) {
        return hundred;
      } else if (tens >= hundred && tens >= ones) {
        return tens;
      } else {
        return ones;
      }
      break;
    }
    default:
      break;
  }
}

console.log(getMaxDigit(7));
console.log(getMaxDigit(57));
console.log(getMaxDigit(123));
console.log(getMaxDigit(739));
