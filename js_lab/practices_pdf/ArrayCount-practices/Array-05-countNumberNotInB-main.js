function countNumbersNotInB(a, b) {
  //validate args
  if (!Array.isArray(a) || !Array.isArray(b)) return 0;

  if (a.some((number) => typeof number !== 'number')) return 0;

  if (b.some((number) => typeof number !== 'number')) return 0;

  //process
  if (a.length === 0) return b.length;

  if (b.length === 0) return a.length;

  let count = 0;

  a.forEach((element) => {
    if (!b.includes(element)) count++;
  });

  return count;
}

console.log(countNumbersNotInB([1, 2, 3], [1, 2, true]));
