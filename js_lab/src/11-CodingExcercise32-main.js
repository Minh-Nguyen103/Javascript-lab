function calcCartTotal(cartItemList) {
  //validate args
  if (!Array.isArray(cartItemList)) return 0;

  for (let index = 0; index < cartItemList.length; index++) {
    if (typeof cartItemList[index] !== 'object') return 0;
  }

  //process
  if (cartItemList.length === 0) return 0;

  const sumCart = cartItemList.reduce((sum, currentObj) => {
    sum += currentObj['product']['price'] * currentObj['quantity'];
    return sum;
  }, 0);

  return sumCart;
}

console.log(
  calcCartTotal([
    { id: 1, product: { id: 1, price: 10000 }, quantity: 4 },
    { id: 2, product: { id: 1, price: 20000 }, quantity: 2 },
  ])
);
