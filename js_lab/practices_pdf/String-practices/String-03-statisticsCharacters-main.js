function statisticsCharacters(str) {
  //validate args
  if (typeof str !== 'string') return {};

  //process
  const splitString = str.split('');
  const objCharacters = splitString.reduce((obj, currentCharacter) => {
    if (currentCharacter === ' ') {
      obj['space'] = (obj['space'] || 0) + 1;
      return obj;
    }
    obj[currentCharacter] = (obj[currentCharacter] || 0) + 1;
    return obj;
  }, {});

  return objCharacters;
}
console.log(statisticsCharacters('aa b cc    '));
