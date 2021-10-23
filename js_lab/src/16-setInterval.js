function countdown(seconds) {
  let currentSecond = seconds;
  const intervalId = setInterval(() => {
    console.log(currentSecond);

    if (currentSecond <= 0) {
      clearInterval(intervalId);
    }

    currentSecond--;
  }, 2000);
}

function countdownV1(seconds) {
  let currentSecond = seconds;

  const intervalId = setInterval(() => {
    console.log(currentSecond);

    if (currentSecond <= 10) {
      clearInterval(intervalId);
    }

    currentSecond--;
  }, 1000);
}

countdown(10);
// countdownV1(20);
console.log('hahah');
