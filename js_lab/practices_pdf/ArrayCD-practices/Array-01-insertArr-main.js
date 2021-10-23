function insert(arr, newItem, k) {
  //validate args
  if (!Array.isArray(arr) || typeof newItem !== 'number' || typeof k !== 'number') return [];

  if (arr.some((number) => typeof number !== 'number')) return [];

  //process
  const cloneArr = [...arr];

  if (k > cloneArr.length) {
    cloneArr.push(newItem);
    return cloneArr;
  }

  if (k <= 0) {
    cloneArr.unshift(newItem);
    return cloneArr;
  }

  cloneArr.splice(k, 0, newItem);
  return cloneArr;
}

console.log(insert([1, 2, 3], 10, 0));
