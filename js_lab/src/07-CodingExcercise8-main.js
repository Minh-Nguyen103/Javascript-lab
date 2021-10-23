/*Format số giây luôn hiển thị 2 số
Viết hàm funcion formatSecondsV1(seconds) nhận vào là số giây (0 <= seconds < 60)
và trả về chuỗi luôn có 2 chữ số của số giây.
Bài này áp dụng trong thực tế khi muốn show đồng hồ điện tử, để cho đẹp,
mình đảm bảo luôn show 2 chữ số, dù số giờ phút giây chỉ có một chữ số.
Ví dụ: 
-formatSeconds(0) --> '00'
-formatSeconds(9) --> '09'
-formatSeconds(20) --> '20'
Viết hàm theo 2 hướng tiếp cận khác nhau:
1.formatSecondsV1(seconds) Sử dụng if..else
2.formatSecondsV2(seconds) Sử dụng hàm slice()
*/

function formatSecondsV1(seconds) {
  //validate args
  if (seconds < 0 || seconds >= 60) return -1;

  //process
  seconds = seconds.toString();
  if (seconds.length === 1) {
    seconds = seconds.padStart(2, '0');
    return seconds;
  } else {
    return seconds;
  }
}

console.log(formatSecondsV1(0));

function formatSecondsV2(seconds) {
  //validate args
  if (seconds < 0 || seconds >= 60) return -1;

  //process
  seconds = seconds.toString();
  const result = `0${seconds}`.slice(-2);
  return result;
}

console.log(formatSecondsV2(20));
