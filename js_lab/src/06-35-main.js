//BUILT IN OBJECT NUMBER

//Example for Stactic Method : parseInt() and parseFloat()....

// console.log(Number.parseInt('a123'));
// console.log(Number.parseFloat('123.55a'));
// console.log(Number.parseFloat('123.5a5'));

//Example for Instance Method : toFixed() and toPrecision()....

const a = 0.005356;
console.log(a.toPrecision());
console.log(a.toString());
// console.log(a.toPrecision(0)); //error
console.log(a.toPrecision(1)); //0.005
console.log(a.toPrecision(2)); //0.0054
console.log(a.toPrecision(3)); //0.00536
console.log(a.toPrecision(4)); //0.005356
console.log(a.toPrecision(5)); //0.0053560
console.log(a.toPrecision(6)); //0.00535600
