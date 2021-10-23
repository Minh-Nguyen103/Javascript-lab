function statisticsWords(str) {
  //validate args
  if (typeof str !== 'string') return {};

  //process
  const splitString = str.split(' ');

  const objWords = splitString.reduce((obj, currentWord) => {
    if (currentWord === '') return obj;

    obj[currentWord] = (obj[currentWord] || 0) + 1;
    return obj;
  }, {});

  return objWords;
}

console.log(statisticsWords('Pham    Minh Nguyen  Pham pham'));
