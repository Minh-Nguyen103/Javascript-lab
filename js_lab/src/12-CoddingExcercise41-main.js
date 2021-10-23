// using object
function buildCategoryMapV1(categoryList) {
  //validate args
  if (!Array.isArray(categoryList) || categoryList.length === 0) return {};

  if (categoryList.some((category) => typeof category !== 'object')) return {};

  //process
  return categoryList.reduce((obj, cuurentCategory) => {
    obj[cuurentCategory.id] = cuurentCategory;
    return obj;
  }, {});
}

// using Map
function buildCategoryMapV2(categoryList) {
  //validate args
  if (!Array.isArray(categoryList) || categoryList.length === 0) return new Map();

  if (categoryList.some((category) => typeof category !== 'object')) return new Map();

  //process
  return categoryList.reduce((obj, cuurentCategory) => {
    obj.set(cuurentCategory.id, cuurentCategory);
    return obj;
  }, new Map());
}

console.log(buildCategoryMapV2([]));
