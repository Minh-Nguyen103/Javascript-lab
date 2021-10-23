function getUniqueWords(sentence) {
  //validate args
  if (typeof sentence !== 'string' || sentence.length === 0) return [];

  //process
  const uniqueWords = new Set(sentence.trim().split(' '));
  //   return uniqueWords;
  return [...uniqueWords].filter((word) => word !== ' ');
}

// console.log(getUniqueWords('frontend is easy but easy to die'));
console.log(getUniqueWords(' easy'));
