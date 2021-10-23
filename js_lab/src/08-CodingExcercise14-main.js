/* Viết hàm clone object nhưng không dùng spread operator
Viết hàm funcion cloneObject(obj) để clone một object obj truyền vào, và trả về là một
object mới có đầy đủ các keys của object truyền vào. 

Ví dụ: 
const studentA = { name: 'Bob', math: 9 };
const studentB = cloneObject(studentA);

console.log(studentA === studentB);
console.log(studentB.name);
console.log(studentB.math);

*/

function cloneObject(obj) {
  //validate args
  if (typeof obj !== 'object') return null;

  //process
  const cloneObj = {};
  for (const key in obj) {

    cloneObj[key] = obj[key];
  }

  return cloneObj;
}

//Test
const studentA = { name: 'Bob', math: 9 };
const studentB = cloneObject(studentA);

console.log(studentA === studentB);
console.log(studentB.name);
console.log(studentB.math);
