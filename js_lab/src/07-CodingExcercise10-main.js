/* Kiểm tra URL có sử dụng phương thức bảo mật
Viết hàm funcion isSecureUrl(url)  nhận vào là một url và trả về true nếu url có sử dụng phương thức bảo mật
và ngược lại là false
Quy ước URL được xem là có sử dụng phương thức bảo mật nếu bắt đầu bằng:
-https
-wss
Tạm thời bỏ qua việc kiểm tra url có hoàn chỉnh hay không, chỉ quan tâm phương thức bảo mật.
Ví dụ: 
-isSecureUrl('http://abc.com') --> false vì bắt đầu bằng http, ko phải là https
-isSecureUrl('https://ezfrontend.com') --> true
-isSecureUrl('wss://chat.ezfrontend.com') --> true
-isSecureUrl('ws://chat.abc.com') --> false

Viết bằng 2 hướng tiếp cận khác nhau:
1.isSecureUrlV1(url) sử dụng indexOf()
2.isSecureUrlV2(url) sử dụng startsWith()
*/

// using indexOf()
function isSecureUrlV1(url) {
  //Validate args
  if (typeof url !== 'string') return 'Input not validate';

  //process
  return url.indexOf('https') >= 0 || url.indexOf('wss') >= 0 || false;
}

console.log(isSecureUrlV1('http://abc.com'));
console.log(isSecureUrlV1('https://ezfrontend.com'));
console.log(isSecureUrlV1('wss://chat.ezfrontend.com'));
console.log(isSecureUrlV1('ws://chat.abc.com'));
console.log(isSecureUrlV1(1));



// using startsWith()
function isSecureUrlV2(url) {
    //Validate args
    if (typeof url !== 'string') return 'Input not validate';

    //process
    return url.startsWith('https') || url.startsWith('wss')|| false;
}

console.log(isSecureUrlV2('http://abc.com'));
console.log(isSecureUrlV2('https://ezfrontend.com'));
console.log(isSecureUrlV2('wss://chat.ezfrontend.com'));
console.log(isSecureUrlV2('ws://chat.abc.com'));
console.log(isSecureUrlV2(1));


