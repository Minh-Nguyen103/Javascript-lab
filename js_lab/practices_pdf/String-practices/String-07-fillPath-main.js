function fillPath(path, params) {
  //validate args
  if (typeof path !== 'string' || typeof params !== 'object' || path.length === 0) return '';

  //process
  if (Object.keys(params).length === 0) return path;

  let pathNotColon = path.split(':').join('');

  const objectInArray = Object.entries(params);

  let compareCorresponding;
  let strokeIdx;

  objectInArray.forEach(([key, value]) => {
    pathNotColon.indexOf('/', pathNotColon.indexOf(key)) > 0
      ? (strokeIdx = pathNotColon.indexOf('/', pathNotColon.indexOf(key)))
      : (strokeIdx = pathNotColon.length);

    compareCorresponding = pathNotColon.slice(pathNotColon.indexOf(key), strokeIdx);

    if (compareCorresponding === key) pathNotColon = pathNotColon.replace(key, value);
  });

  return pathNotColon;
}

console.log(
  fillPath('/categories/categoryId/products/productId/', {
    categoryId: 1,
    productId: 2,
    category: 3,
  })
);
