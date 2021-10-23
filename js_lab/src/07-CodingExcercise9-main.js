/*Convert số giây sang chuỗi hh:mm:ss
Viết hàm funcion formatTime(seconds) nhận vào là số giây secconds  với (0 <= seconds <= 86400)
Trả về là một chuỗi với định dạng hh:mm:ss trong đó:;
-hh : là số giờ
-mm : là số phút
-ss : là số giây
hh, mm, ss luôn luôn hiển thị 2 chữ số kể cả nhỏ hơn 10.
Ví dụ: 
-formatTime(0) --> '00:00:00'
-formatTime(9) --> '00:00:09'
-formatTime(4256) --> '01:10:56'
*/

const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  //validate args
  if (seconds < 0 || seconds > 86400) return -1;

  //process
  if (seconds >= SECONDS_PER_HOUR) {
    const hour = '0'.concat(Math.trunc(seconds / SECONDS_PER_HOUR).toString()).slice(-2);
    seconds = seconds - SECONDS_PER_HOUR * hour;
    const min = '0'.concat(Math.trunc(seconds / SECONDS_PER_MIN).toString()).slice(-2);
    seconds = '0'.concat((seconds - SECONDS_PER_MIN * min).toString()).slice(-2);
    return `${hour}:${min}:${seconds}`;
  }
  if (seconds >= SECONDS_PER_MIN) {
    const min = '0'.concat(Math.trunc(seconds / SECONDS_PER_MIN).toString()).slice(-2);
    seconds = '0'.concat((seconds - SECONDS_PER_MIN * min).toString()).slice(-2);
    return `00:${min}:${seconds}`;
  }
  seconds = '0'.concat(seconds.toString()).slice(-2);
  return `00:00:${seconds}`;
}

console.log(formatTime(0));
console.log(formatTime(9));
console.log(formatTime(4256));
