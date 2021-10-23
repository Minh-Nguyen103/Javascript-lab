function createRandomColorFn(colorList) {
  //validate args
  if (!Array.isArray(colorList)) throw new Error('colorList should be an array');

  if (colorList.length === 0) throw new Error('colorList should not be an empty');

  if (colorList.length === 1) throw new Error('colorList should have more than one item');

  //process
  let colorNext = '';
  let colorPre = '';
  let idx = 0;

  function randomColorFn() {
    while (colorNext === colorPre) {
      const randomNumber = Math.round(Math.random() * colorList.length);
      colorNext = colorList[randomNumber];
    }

    colorPre = colorNext;

    return colorNext;
  }

  return randomColorFn;
}

const colorList = ['red', 'black', 'pink', 'green', 'yellow', 'blue'];

const randomColor = createRandomColorFn(colorList);
const colorNext = randomColor();
const colorPre = randomColor();

console.log(colorNext);
console.log(colorPre);
