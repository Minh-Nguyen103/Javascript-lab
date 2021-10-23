function createQueue() {
  const queue = [];

  function getFront() {
    return queue.length > 0 ? queue[0] : undefined;
    //return queue[0];
  }

  function getBack() {
    return queue.length > 0 ? queue[queue.length - 1] : undefined;
  }

  function getSize() {
    return queue.length;
  }

  function endQueue(data) {
    queue.push(data);
  }

  function deQueue() {
    return queue.shift();
  }

  return {
    getFront,
    getBack,
    getSize,
    endQueue,
    deQueue,
  };
}
