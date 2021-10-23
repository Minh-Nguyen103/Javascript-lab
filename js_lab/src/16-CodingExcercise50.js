function printClock() {
  let now = new Date();
  let hours = `0${now.getHours()}`.slice(-2);
  let minutes = `0${now.getMinutes()}`.slice(-2);
  let seconds = `0${now.getSeconds()}`.slice(-2);

  function print() {
    const intervalId = setInterval(() => {
      console.log(`${hours}:${minutes}:${seconds}`);

      // if (Number.parseInt(minutes) === 41) {
      //   clearInterval(intervalId);
      // }

      now = new Date();
      hours = `0${now.getHours()}`.slice(-2);
      minutes = `0${now.getMinutes()}`.slice(-2);
      seconds = `0${now.getSeconds()}`.slice(-2);
    }, 1000);
  }

  return print;
}

const intervalId = printClock();

intervalId();

clearInterval(intervalId);
