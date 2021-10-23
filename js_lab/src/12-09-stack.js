function createStack() {
  const stack = [];

  function getTop() {
    return stack.length === 0 ? undefined : stack[stack.length - 1];
  }

  function getSize() {
    return stack.length;
  }

  function isEmpty() {
    return stack.length === 0;
  }

  function push(data) {
    stack.push(data);
  }

  function pop(data) {
    return stack.pop();
  }

  return {
    getTop,
    getSize,
    isEmpty,
    push,
    pop,
  };
}
