function createCounter() {
  //validate args

  //process
  const objCount = {
    default: 0,
  };

  function count(label = 'default') {
    const countLabel = (objCount[label] || 0) + 1;
    objCount[label] = countLabel;

    return `${label}: ${objCount[label]}`;
  }

  function resetCount(label = 'default') {
    objCount[label] = 0;
    return;
  }
  return {
    count,
    resetCount,
  };
}

const counter = createCounter();
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());

console.log(counter.count('Minh'));
console.log(counter.count('Minh'));

console.log(counter.count('Nguyen'));
console.log(counter.count('Nguyen'));
counter.resetCount();
console.log(counter.count());
