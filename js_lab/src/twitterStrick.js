// // Destructure an object into existing variables

const obj = {
  a: 1,
  b: '2',
};
let a, b;
// ({ a, b } = obj);

a, (b = (1, 2));

console.log(a, b);

//End

//test
function test(value) {
  let number = value;

  function increase() {
    number++;
    console.log('aaaaaaaa');
    return number;
  }

  return number;
}
// console.log(test(1));
// const a = test(1);
// console.log(a());

function sum(...numberList) {
  return numberList;
}

console.log(sum([1, 2, 3], 2));
