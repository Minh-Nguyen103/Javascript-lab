function debounce(callback, wait) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, wait);
  };
}

function log() {
  console.log('Tadaaa');
}

const debounceLog = debounce(log, 500);
debounceLog();
debounceLog();
debounceLog();
debounceLog();
debounceLog();
