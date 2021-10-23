function hasFalsy(arr) {
  //validate args
  if (!Array.isArray(arr) || arr.length === 0) return false;

  //process
  for (let index = 0; index < arr.length; index++) {
    if (!arr[index]) return true;
  }

  return false;
}

console.log(hasFalsy([12, '']));
