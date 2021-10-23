/* Tìm và xóa các nguyên âm trong câu
Viết hàm funcion removeVowel(str) để tìm và  remove tất cả nguyên âm có trong câu văn
đầu vào.
Nguyên âm là các kí tự;; u,e,o,a,i
Ví dụ: 
-removeVowel('') --> ''
-removeVowel('say hello') --> 'sy hll' 
Giả định mỗi nguyên âm trong str chỉ xuất hiện 1 lần
Trường hợp chuỗi sau khi bỏ nguyên âm có dư khoảng trắng ở đầu hoặc cuối chuỗi,
thì bỏ luôn khoảng trắng thừa.
*/

function removeVowel(str) {
  //Validate args
  if (typeof str !== 'string') return 'Input not validate';

  //process
  str = str.replace('e', '');
  str = str.replace('u', '');
  str = str.replace('o', '');
  str = str.replace('a', '');
  str = str.replace('i', '');

  return str.trim();
}

console.log(removeVowel('say hello'));
