function findAllIPhones(productList) {
  //validate args
  if (!Array.isArray(productList) || productList.length === 0) return [];

  for (let index = 0; index < productList.length; index++) {
    if (typeof productList[index] !== 'object') return [];

    if (!'name' in productList[index] || !'amount' in productList[index]) return [];

    if (
      typeof productList[index]['name'] !== 'string' ||
      typeof productList[index]['amount'] !== 'number'
    )
      return [];
  }
  //process
  return productList.reduce((productArr, currentProduct) => {
    const name = currentProduct.name.split(' ').map((name) => name.toLowerCase());
    if (name.includes('iphone') && currentProduct.amount > 0) productArr.push(currentProduct);

    return productArr;
  }, []);
}

const productList = [
  { id: 1, name: 'Luxury Phone X', amount: 1 },
  { id: 2, name: 'Super Cool iphonee 16 Pro', amount: 1 },
  { id: 3, name: 'iphone 20 Pro', amount: 2 },
];
console.log(findAllIPhones(productList));
