function findLongestWord(wordList) {
  //validate args
  if (!Array.isArray(wordList) || wordList.length === 0) return '';

  if (wordList.some((word) => typeof word !== 'string')) return '';

  //process
  let longestWord = '';

  wordList.forEach((element) => {
    if (element.length > longestWord.length && !element.includes(' ') && element.length <= 5)
      longestWord = element;
  });

  return longestWord;
}

console.log(findLongestWord(['12  5', '123 4', '123456']));
