function generateNumberInRange(a, b) {
  //validate args
  if (typeof a !== 'number' || typeof b !== 'number') return [];

  if (a > b) return [];

  //process

  return Array.from({ length: b - a + 1 }, (_v, index) => index + a);
}

console.log(generateNumberInRange(6, 6));
