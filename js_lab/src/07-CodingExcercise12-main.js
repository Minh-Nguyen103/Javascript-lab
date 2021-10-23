/* Truy tìm mật mã
Viết hàm funcion findSecret(code) để tìm ra chuỗi mật mã với quy tắc như sau:
Bỏ đi kí tự HOA trong code, chuỗi còn lại chình là mật mã cần tìm.
Lưu ý: không dùng hàm replaceAll() và không dùng regular expression(regexp)
Ví dụ: 
-findSecret('SUPERCODE') --> ''
-findSecret('SUPEhelloRCODE') --> ''
-findSecret('eaHSsyIDHAfrontSPASDend') --> ''

*/

function findSecret(code) {
  //validate args
  if (typeof code !== 'string') return 'Input not validate';

  //process

  const CHARACTER_CODE_OF_LOWERCASE_MIN = 97;
  const CHARACTER_CODE_OF_LOWERCASE_MAX = 122;
  let codeSecret = '';
  for (let index = 0; index < code.length; index++) {
    if (
      code.charCodeAt(index) >= CHARACTER_CODE_OF_LOWERCASE_MIN &&
      code.charCodeAt(index) <= CHARACTER_CODE_OF_LOWERCASE_MAX
    ) {
      codeSecret = `${codeSecret}${code[index]}`;
    }
  }
  return codeSecret;
}

console.log(findSecret('eaHSsyIDHAfrontSPASDend'));
