// function createIterator(n) {
//   let i = 0;

//   return {
//     next() {
//       const result = {
//         value: i,
//         done: i >= n,
//       };

//       i += 1;

//       return result;
//     },
//   };
// }

// const iterator = createIterator(10);
// let result = iterator.next();

// // console.log(result);

// while (!result.done) {
//   console.log(result.value);
//   result = iterator.next();
// }

function createIterable(numberList) {
  let i = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          const result = {
            value: numberList[i],
            done: i >= numberList.length,
          };

          i += 1;

          return result;
        },
      };
    },
  };
}

const iterable = createIterable([1, 2, 3, 4, 5]);

for (const number of iterable) {
  console.log(number);
}
