/* Kiểm tra độ mạnh mật khẩu
Viết hàm funcion isStrongPassword(password) nhận vào 1 chuỗi password, trả 
về true nếu là mật khẩu mạnh và ngược lại trả về false
Một mật khẩu mạnh là cần thỏa các điều kiện sau:
1.Ít nhất 8 kí tự
2.Có ít nhất một ký tự thường.
3.Có ít nhất một ký tự hoa.
4.Có ít nhất một chữ số.
5.Có ít nhất một trong các ký tự đặc biệt này:!,@,#,$,%,^,&,*,()
Ví dụ:
- isStrongPassword('') --> false
- isStrongPassword('super strong') --> false
- isStrongPassword('Sup3rCOo!') --> true

Lưu ý: không sử dụng regular expression vì chưa học đến
*/

const SPECIAL_CHARACTER = ['!', '@', '#', '$', '%', '^', '&', '*', '()'];

function isStrongPassword(password) {
  //validate args
  if (typeof password !== 'string') return 'Invalid input';

  //process
  if (password.length < 8) return false;

  const passwordCharacterList = password.split('');

  const haveUpperCase = passwordCharacterList.some((character) => {
    return character === character.toUpperCase();
  });
  if (!haveUpperCase) return false;

  const haveLowerCase = passwordCharacterList.some((character) => {
    return character === character.toLowerCase();
  });
  if (!haveLowerCase) return false;

  const haveNumber = passwordCharacterList.some((character) => {
    return Number.isNaN(Number.parseInt(character)) === false;
  });
  if (!haveNumber) return false;

  const haveSpecialCharacter = passwordCharacterList.some((character) => {
    return SPECIAL_CHARACTER.includes(character);
  });
  if (!haveSpecialCharacter) return false;

  return true;
}

console.log(isStrongPassword('')); //<8
console.log(isStrongPassword('super strong'));
console.log(isStrongPassword('Sup3rCOo!'));
