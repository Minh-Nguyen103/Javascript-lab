function hasFreeShip(productList, price) {
  //validate args
  if (
    !Array.isArray(productList) ||
    typeof price !== 'number' ||
    Object.keys(productList).length === 0
  )
    return false;

  if (productList.some((obj) => typeof obj !== 'object')) return false;

  let keyObj;
  let valueObj;
  for (let index = 0; index < productList.length; index++) {
    if (typeof productList[index] !== 'object') return false;

    keyObj = Object.keys(productList[index]);

    if (!(keyObj.includes('isFreeShip') && keyObj.includes('price'))) return false;

    if (
      typeof productList[index]['isFreeShip'] !== 'boolean' ||
      typeof productList[index]['price'] !== 'number'
    )
      return false;
  }

  //process
  return productList.some((obj) => obj['isFreeShip'] && obj['price'] < price);
}

const productList = [
  { id: 1, name: 'Iphone 16', isFreeShip: true, price: 1020050 },
  { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 15000000 },
];

console.log(hasFreeShip(productList, 10000000));
