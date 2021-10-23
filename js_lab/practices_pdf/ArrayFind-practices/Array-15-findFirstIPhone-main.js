function findFirstIPhone(productList) {
  //validate args
  if (!Array.isArray(productList) || productList.length === 0) return undefined;

  for (let index = 0; index < productList.length; index++) {
    if (typeof productList[index] !== 'object') return undefined;

    if (!'name' in productList[index]) return undefined;

    if (typeof productList[index]['name'] !== 'string') return undefined;
  }

  //process
  let product;

  productList.some((phone) => {
    const name = phone.name.toLowerCase().split(' ')[0];
    if (name === 'iphone') {
      product = phone;
      return true;
    }
    return false;
  });

  return product;
}

const productList = [
  { id: 1, name: 'Samsung' },
  { id: 2, name: 'IPHONEE X' },
  { id: 3, name: 'iPhone 12 Pro' },
];

console.log(findFirstIPhone(productList));
