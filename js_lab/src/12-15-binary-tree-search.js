function createBinarySearchTree(initKeyList) {
  let root = null;

  if (Array.isArray(initKeyList) && initKeyList.length > 0) {
    initKeyList.forEach((key) => {
      root = insert(root, key);
    });
  }

  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };

    if (node == null) return newNode;

    if (node.key === key) return node;

    if (key > node.key) {
      node.right = insert(node.right, key);
    } else {
      node.left = insert(node.left, key);
    }

    return node;
  }

  function search(node, key) {
    if (node == null) return null;

    if (key > node.key) return search(node.right, key);
    if (key < node.key) return search(node.left, key);

    return node;
  }

  function findMin(node) {
    if (node == null) return null;

    let minNode = node;

    while (minNode.left != null) {
      minNode = minNode.left;
    }

    return minNode;
  }

  function getMaxNodesCount(node) {
    if (node == null) return 0;

    const leftHeight = getMaxNodesCount(node.left);
    const rightHeight = getMaxNodesCount(node.right);

    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  function getHeight() {
    const height = getMaxNodesCount(root);
    return height > 0 ? height - 1 : 0;
  }

  function printNodesAtLevel(node, level) {
    if (node == null) return;

    if (level === 0) {
      console.log(node.key);
      return;
    }

    printNodesAtLevel(node.left, level - 1);
    printNodesAtLevel(node.right, level - 1);
  }

  function bfs() {
    const height = getHeight();
    for (let index = 0; index < height; index++) {
      printNodesAtLevel(root, index);
    }
  }

  function printInOrder(node) {
    if (node == null) return;

    printInOrder(node.left);
    console.log(node.key);
    printInOrder(node.right);
  }

  function printPreOrder(node) {
    if (node == null) return;

    console.log(node.key);
    printPreOrder(node.left);
    printPreOrder(node.right);
  }

  function printPostOrder(node) {
    if (node == null) return;

    printPostOrder(node.left);
    printPostOrder(node.right);
    console.log(node.key);
  }

  function remove(node, key) {
    if (node == null) return node;

    //find until we get at the node to be deleted
    if (key > node.key) {
      node.right = remove(node.right, key);
      return node;
    }

    if (key < node.key) {
      node.left = remove(node.left, key);
      return node;
    }

    //key === node.key
    //no child
    if (node.left == null && node.right == null) {
      return null;
    }

    //one child
    if (node.left == null) {
      node = node.right;
      return node;
    }

    if (node.right == null) {
      node = node.left;
      return node;
    }

    //two child
    const minNode = findMin(node.right);
    node.key = minNode.key;
    node.right = remove(node.right, minNode.key);
    return node;
  }

  return {
    root,
    insert,
    search,
    findMin,
    getHeight,
    getMaxNodesCount,
    bfs,
    printInOrder,
    printPreOrder,
    printPostOrder,
  };
}

const binarySearchTree = createBinarySearchTree([10, 7, 15]);
// console.log(binarySearchTree.insert(binarySearchTree.root, 16));
// console.log(binarySearchTree.root);

console.log(binarySearchTree.getMaxNodesCount(binarySearchTree.root));
