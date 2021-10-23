function hasEasyFrontend(wordList) {
  //validate args
  if (!Array.isArray(wordList) || wordList.length === 0) return false;

  if (wordList.some((word) => typeof word !== 'string')) return false;

  //process
  let count = 0;

  if (wordList.includes('easy frontend')) return true;

  if (!wordList.includes('easy')) return false;

  if (!wordList.includes('frontend')) return false;

  return true;
}

console.log(hasEasyFrontend(['frontend', 'easy']));
