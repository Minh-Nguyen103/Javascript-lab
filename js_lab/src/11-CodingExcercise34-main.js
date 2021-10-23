function chunkArray(array, size) {
  //validate args
  if (!Array.isArray(array) || size <= 0 || !Number.isInteger(size)) return [];

  //process
  if (array.length === 0) return [];

  let result = new Array(Math.ceil(array.length / size));
  if (result.length > 20) throw new Error('Too many chunks');

  let startSlice = 0;
  let endSlice = 0;
  for (let index = 0; index < result.length; index++) {
    endSlice += size;
    result[index] = array.slice(startSlice, endSlice);
    startSlice += size;
  }
  return result;
}
console.log(
  chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 1)
);
