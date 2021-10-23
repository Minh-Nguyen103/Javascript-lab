//IMPRECISE CALCULATIONS: SAI SỐ

//Example...

console.log((0.2).toFixed(20));
console.log((0.4).toFixed(20));
console.log((0.2 + 0.4).toFixed(20));
console.log((0.6).toFixed(20));

console.log(0.2 + 0.4 == 0.6);
console.log(0.2 + 0.4 === 0.6);
console.log(Math.abs(0.2 + 0.4 - 0.6) < Number.EPSILON);
console.log((0.2 + 0.4).toFixed(1) === (0.6).toFixed(1));
