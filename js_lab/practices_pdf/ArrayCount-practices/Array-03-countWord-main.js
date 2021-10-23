function countWords(wordList, n) {
  //validate args
  if (!Array.isArray(wordList) || wordList.length === 0 || typeof n !== 'number') return 0;

  if (wordList.some((word) => typeof word !== 'string')) return 0;

  //process
  return wordList.reduce((count, currentWord) => {
    if (currentWord.length >= n) count++;

    return count;
  }, 0);
}

console.log(countWords(['Pham', 'Minh', 'Nguyen'], 7));
