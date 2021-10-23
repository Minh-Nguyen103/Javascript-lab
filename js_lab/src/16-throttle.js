function throttle(callback, wait) {
  let isThrottling = false;

  return function () {
    if (isThrottling) return;

    isThrottling = true;
    setTimeout(() => {
      callback();

      isThrottling = false;
    }, wait);
  };
}

function log() {
  console.log('Tadaaa');
}

const throttleLog = throttle(log, 500);

throttleLog();
throttleLog();
throttleLog();
throttleLog();

setTimeout(throttleLog, 400);

const a = {
  name: 'Minh',
  name2: this,
};

console.log(a);
