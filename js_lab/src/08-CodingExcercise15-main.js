/* Kiểm tra 2 Object có bằng nhau hay không?
Viết hàm funcion isEqual(obj1, obj2) nhận vào 2 objects và trả về:
- true  nếu số lượng keys của 2 objects bằng nhau,
  và giá trị của từng key cũng bằng nhau (dùng === để so sánh)

- ngược lại là false

Ví dụ: 
- isEqual({},{}) --> true
- isEqual({name:'Bod'},{name:'Alice'}) --> false
- isEqual({name:'Bod'},{name:'Bod'}) --> true
- isEqual({name:'Bod'},{name:'Bod',age:18}) --> false

Giả sử kiểu dữ liệu của các thuộc tính của cả 2 objects đều là kiểu dữ liệu primitive.
*/

function isEqual(obj1, obj2) {
  //Validate args
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

  //process
  const listKeyObj1 = Object.keys(obj1);
  const listKeyObj2 = Object.keys(obj2);
  const lengthObj1 = listKeyObj1.length;
  const lengthObj2 = listKeyObj2.length;
  if (lengthObj1 !== lengthObj2) return false;
  for (let index = 0; index < lengthObj1; index++) {
    const keyObj1 = listKeyObj1[index];
    const keyObj2 = listKeyObj2[index];

    if (obj1[keyObj1] !== obj2[keyObj2] || keyObj1 !== keyObj2) return false;
  }
  return true;
}
console.log(isEqual({}, {}));
console.log(isEqual({ name: 'Bod' }, { name: 'Alice' }));
console.log(isEqual({ name: 'Bod' }, { name: 'Bod' }));
console.log(isEqual({ name: 'Bod' }, { name: 'Bod', age: 18 }));
