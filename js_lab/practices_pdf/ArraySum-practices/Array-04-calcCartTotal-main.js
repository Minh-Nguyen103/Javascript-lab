function calcCartTotal(cartItemList) {
  //validate args
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  for (let index = 0; index < cartItemList.length; index++) {
    if (typeof cartItemList[index] !== 'object') return 0;

    if (!'product' in cartItemList[index] || !'quantity' in cartItemList[index]) return 0;

    if (
      typeof cartItemList[index]['product'] !== 'object' ||
      typeof cartItemList[index]['quantity'] !== 'number'
    )
      return 0;

    if (!'price' in cartItemList[index]['product']) return 0;

    if (typeof cartItemList[index]['product']['price'] !== 'number') return 0;
  }

  //process
  return cartItemList.reduce((sum, currentItem) => {
    sum += currentItem.quantity * currentItem.product.price;
    return sum;
  }, 0);
}

const cartItemList = [
  { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
  { id: 2, product: { id: 2, price: 100000 }, quantity: 3 },
];
console.log(calcCartTotal(cartItemList));

function calcCartTotalV1(cartItemList) {
  //validate args
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  for (let index = 0; index < cartItemList.length; index++) {
    if (typeof cartItemList[index] !== 'object') return 0;

    if (!'product' in cartItemList[index] || !'quantity' in cartItemList[index]) return 0;

    if (
      typeof cartItemList[index]['product'] !== 'object' ||
      typeof cartItemList[index]['quantity'] !== 'number'
    )
      return 0;

    if (!'price' in cartItemList[index]['product']) return 0;

    if (typeof cartItemList[index]['product']['price'] !== 'number') return 0;
  }

  //process
  return cartItemList
    .map((item) => item.product.price * item.quantity)
    .reduce((sum, priceItem) => (sum += priceItem));
}
const cartItemListt = [
  { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
  { id: 2, product: { id: 2, price: 100000 }, quantity: 3 },
];
console.log(calcCartTotalV1(cartItemListt));
