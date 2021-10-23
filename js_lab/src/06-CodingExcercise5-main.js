/*
Viết hàm compareNumber(a,b) nhận vào 2 số nguyên a,b bất kì
Trả về:
- 1 nếu a > b 
- 0 nếu a = b 
- -1 nếu a < b
Ví dụ:
- compareNumber(3,5) --> -1
- compareNumber(5,3) --> 1
- compareNumber(5,5) --> 0
*/

function compareNumber(a, b) {
  //checking valid ...
  if (a.toFixed(1)%10 != 0 || b.toFixed(1)%10 != 0) return -2;

  //compare
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}


//Test
const a = 2.1;
const b = 3.1;
// const x = (a.toFixed(1))%10;
console.log(a.toFixed(1)%10);
if ((a.toFixed(1))%10 != 0 || (b.toFixed(1))%10 != 0) {
  console.log('hahah');
} else {
  console.log('huhuhu');
}
