const numbersOrigin = [];
for (let index = 1; index <= 201; index++) {
  numbersOrigin.push(index);
}

const paging = function(pageNumber, pageSize) {
  pageNumber = pageNumber >= 1 ? pageNumber : 1;
  pageSize = pageSize >= 1 ? pageSize : 10;
};

const navPaging = function(pageNumber, pageSize, navSize) {
  pageNumber = pageNumber >= 1 ? pageNumber : 1;
  pageSize = pageSize >= 1 ? pageSize : 10;
  navSize = navSize >= 1 ? navSize : 10;
  const pageMax = Math.ceil(numbersOrigin.length / pageSize);
  const navs = [];
  for (let index = 1; index <= navSize; index++) {
    const navCalc = index;
    navs.push(navCalc);
  }
  return navs;
};
