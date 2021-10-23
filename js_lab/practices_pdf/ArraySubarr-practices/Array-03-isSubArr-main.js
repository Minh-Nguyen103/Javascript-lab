function isSubArray(a, b) {
  //validate args
  if (!Array.isArray(a) || !Array.isArray(b) || a.length > b.length) return false;

  if (a.some((number) => typeof number !== 'number')) return false;

  if (b.some((number) => typeof number !== 'number')) return false;

  //process
  if (a.length === 0) return true;

  const idxFirstInArrB = b.findIndex((number) => number === a[0]); //2

  if (idxFirstInArrB === -1) return false;

  let idxOfArrA = 0;

  for (let index = idxFirstInArrB; index < idxFirstInArrB + a.length; index++) {
    if (b[index] !== a[idxOfArrA]) return false;

    idxOfArrA++;
  }

  return true;
}
console.log(isSubArray([1, 2], [3, 2, 1, 2, 3]));
