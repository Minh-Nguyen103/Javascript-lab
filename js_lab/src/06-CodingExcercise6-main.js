/*
Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về
true nếu n là số đối xứng ngược lại trả về false
Giả sử tham số n truyền vào luôn luôn là số tối đa 3 chữ số (0 --> 999)
Số đối xứng là số mà đọc từ trái sang phải giống như đọc từ phải sang trái

Ví dụ: 1,22,33,121,222,353,373,... 

*/

function isSymmetricNumber(n) {
  //check valid ...
  if (n < 0 || n >= 1000) return false;

  //code
  switch (n.toString().length) {
    //n have 1 digits
    case 1: {
      return true;
      break;
    }
    //n have 2 digits
    case 2: {
      if (n % 10 === Math.trunc(n / 10)) {
        return true;
      } else {
        return false;
      }
      break;
    }
    //n have 3 digits
    case 3: {
      const ones = n % 10;
      const tens = Math.trunc((n % 100) / 10);
      const hundred = Math.trunc(n / 100);
      if (ones === hundred) {
        return true;
      } else {
        return false;
      }
      break;
    }
  }
}

//TEST
console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(22));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(121));
console.log(isSymmetricNumber(222));
console.log(isSymmetricNumber(353));
console.log(isSymmetricNumber(373));
console.log(isSymmetricNumber(1000));
