function uniqueLetters(str) {
  //validate args
  if (typeof str !== 'string') return 'Invalid input';

  //process
  if (str.length === 0) return '';

  let inputCharacterList = str.split('');
  let uniqueCharacterList = [];
  let indexCharacter;
  inputCharacterList.forEach((character) => {
    indexCharacter = uniqueCharacterList.indexOf(character);
    if (indexCharacter === -1) {
      uniqueCharacterList.push(character);
    } else {
      uniqueCharacterList.splice(indexCharacter, 1);
    }
  });

  return uniqueCharacterList.join('');
}

console.log(uniqueLetters('abc'));
console.log(uniqueLetters('easy frontend'));
console.log(uniqueLetters('aabccddeff'));
