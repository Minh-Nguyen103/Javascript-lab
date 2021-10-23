const PRICE_FILTER = 100000;

function filterProducts(productList) {
  //validate args
  if (!Array.isArray(productList)) return [];

  for (let index = 0; index < productList.length; index++) {
    if (typeof productList[index] !== 'object') return [];
  }

  //process
  if (productList.length === 0) return [];

  const filterProductList = productList.filter((product) => {
    return product['price'] > PRICE_FILTER;
  });

  return filterProductList;
}
