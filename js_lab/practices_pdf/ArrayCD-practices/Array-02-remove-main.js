function remove(arr, k, n) {
  //validate args
  if (!Array.isArray(arr) || typeof k !== 'number') return [];

  if (arr.some((number) => typeof number !== 'number')) return [];

  //process
  let cloneArr = [...arr];
  if (k < 0 || k >= arr.length) return cloneArr;

  if (n === undefined) {
    cloneArr.splice(k);
    return cloneArr;
  }

  cloneArr.splice(k, n);
  return cloneArr;
}

console.log(remove([1, 2, 3], 1));
