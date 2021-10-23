//1. Random a number in range of [0,n]
function randomNumber(n) {
  //validate args
  if (n <= 0) return -1;

  //process
  const random = Math.random() * n;
  const result = Math.round(random);

  //result
  return result;
}

//Test [0,n]
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));

//2. Random a number in range of [a,b] với a < b

function randomNumberInRange(a, b) {
  //validate args
  if (a >= b) return -1;

  //process
  const random = Math.random() * (b - a);
  const result = Math.round(random) + a;

  //result
  return result;
}

//Test [a,b]
console.log(randomNumberInRange(10, 100));
console.log(randomNumberInRange(10, 100));
console.log(randomNumberInRange(10, 100));
console.log(randomNumberInRange(10, 100));
console.log(randomNumberInRange(10, 100));
