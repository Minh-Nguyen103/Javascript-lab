function findAllProducts(productList) {
  //validate args
  if (!Array.isArray(productList) || productList.length === 0) return [];

  for (let index = 0; index < productList.length; index++) {
    if (typeof productList[index] !== 'object') return [];

    if (!'isFreeShip' in productList[index]) return [];

    if (typeof productList[index]['isFreeShip'] !== 'boolean') return [];
  }

  //process
  return productList.reduce((productArr, currentProduct) => {
    if (currentProduct.isFreeShip) productArr.push(currentProduct);
    return productArr;
  }, []);
}

const productList = [
  { id: 1, name: 'iphone X', isFreeShip: false },
  { id: 2, name: 'iphone 16 Pro', isFreeShip: false },
  { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
];
console.log(findAllProducts(productList));
