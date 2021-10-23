function sum(n) {
  if (typeof n !== 'number' || n === 0) return 0;

  return sumFactorial(n) + sum(n - 1);
}

function sumFactorial(n) {
  if (n === 1) return n;

  return n * sumFactorial(n - 1);
}

console.log(sum(4));
