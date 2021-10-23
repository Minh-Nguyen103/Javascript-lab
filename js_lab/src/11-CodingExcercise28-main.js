function countWords(str) {
  //validate args
  if (typeof str !== 'string') return 'Invalid input';

  //process
  let inputCharacterList = str.split(' ');
  let count = 0;
  inputCharacterList.forEach((character) => {
    if (character !== '') count++;
  });

  return count;
}
console.log(countWords(''));
console.log(countWords('easy'));
console.log(countWords('easy frontend'));
console.log(countWords('   easy  frontend'));
