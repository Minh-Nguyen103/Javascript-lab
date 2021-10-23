/* Rút trích domain từ địa chỉ email
Viết hàm funcion extractDomain(email)  nhận vào địa chỉ email, trả về phần domain sau kí tự @

Ví dụ: 
-extractDomain('') --> ''
-extractDomain('alice@gmail.com') --> 'gmail.com'
-extractDomain('bob@abc.com') --> 'abc.com'

Viết bằng 2 hướng tiếp cận khác nhau:
1.extractDomainV1(email) sử dụng split()
2.extractDomainV2(email) sử dụng indexOf() và slice()
*/

// using split
function extractDomainV1(email) {
  //Validate args
  if (typeof email !== 'string') return 'Input not validate';
  //process
  const domain = email.split('@')[1];
  if (domain !== undefined) {
    return domain;
  } else {
    return '';
  }
}

// using indexOf() and slice()
function extractDomainV2(email) {
  //Validate args
  if (typeof email !== 'string') return 'Input not validate';
  //process
  const index = email.indexOf('@');
  if (index >= -1) {
    return email.slice(index + 1);
  } else {
    return '';
  }
}
