const PIN_LENGTH = 6;
function isValidPIN(pin) {
  //validate args
  if (typeof pin !== 'string' || pin.length !== PIN_LENGTH) return false;

  ///process
  if (checkNotIncludesNumber(pin)) return false;

  if (isIncreasingString(pin)) return false;

  if (isDecreasingString(pin)) return false;

  if (!checkAppearNumber(pin)) return false;

  return true;
}

function checkNotIncludesNumber(pin) {
  return pin.split('').some((number) => Number.isNaN(Number.parseInt(number)));
}

function isIncreasingString(pin) {
  for (let index = 1; index < pin.length; index++) {
    if (pin[index] - pin[index - 1] !== 1) return false;
  }

  return true;
}

function isDecreasingString(pin) {
  for (let index = 0; index < pin.length; index++) {
    if (pin[index] - pin[index + 1] !== 1) return false;
  }

  return true;
}

function checkAppearNumber(pin) {
  const countAppearNumber = pin.split('').reduce((obj, currentNumber) => {
    const element = (obj[currentNumber] || 0) + 1;
    obj[currentNumber] = element;
    return obj;
  }, {});

  const value = Object.values(countAppearNumber);

  for (let index = 0; index < value.length; index++) {
    if (value[index] > 2) return false;
  }
  return true;
}

console.log(isIncreasingString('134567'));
