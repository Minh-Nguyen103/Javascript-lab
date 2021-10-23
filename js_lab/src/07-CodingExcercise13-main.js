/* Trả về fullname khi biết first và last name 
Viết hàm funcion getFullName(firstName, lastName) nhận vào firstName và LastName và trả về
chuỗi fullName:
Quy tắc để tạo chuỗi fullName như sau:
- firstName và lastName là optional (có thể không có)
- fullName không có khoảng trắng thừa ở đầu và cuối chuỗi
- firstName và lastName cần phải viết hoa chữ cái đầu tiên, chữ cái còn lại là viết thường
Ví dụ: 
- getFullName('Alice') --> 'Alice'
- getFullName('Alice', '') --> 'Alice'
- getFullName('', 'Nguyen') --> 'Nguyen'
- getFullName('Bob', 'Tran') --> 'Bob Tran'
- getFullName('john', 'pHAm') --> 'John Pham'
*/

function getFullName(firstName, lastName) {
  //   //Validate args
  if (typeof firstName !== 'string') return 'Input not validate';
  if (typeof lastName !== 'string' && typeof lastName !== 'undefined') return 'Input not validate';

  //process
  if (firstName === '' || firstName === undefined) {
    lastName = lastName.trim();
    return `${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`;
  }

  if (lastName === '' || lastName === undefined) {
    firstName = firstName.trim();
    return `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}`;
  }

  firstName = firstName.trim();
  lastName = lastName.trim();
  firstName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}`;
  lastName = `${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`;

  return `${firstName} ${lastName}`.trim();
}
console.log(getFullName('Alice'));
