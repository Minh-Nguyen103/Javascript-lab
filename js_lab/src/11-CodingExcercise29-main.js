function mergeArray(a, b) {
  //validate args
  if (!Array.isArray(a) || !Array.isArray(b)) return [];

  //process

  //Check positive integer
  const checkPositiveIntegerArrayA = a.find((number) => number < 0);
  if (checkPositiveIntegerArrayA !== undefined) return [];

  const checkPositiveIntegerArrayB = a.find((number) => number < 0);
  if (checkPositiveIntegerArrayB !== undefined) return [];

  //Merge
  let mergeResult = [...a];
  b.forEach((number) => {
    if (!mergeResult.includes(number)) mergeResult.push(number);
  });

  return mergeResult.sort((a, b) => a - b);
}
