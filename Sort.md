# 정렬(Sort)

## 기본형
```js
const sort = function(list) {
  if (list.length < 2) return list;
  const listSmall = [], listEqual = [], listBig = [];
  const compare = list[0];
  for (let index = 0; index < list.length; index++) {
    if (list[index] === compare) {
      listEqual.push(list[index]);
    } else if (list[index] < compare) {
      listSmall.push(list[index]);
    } else {
      listBig.push(list[index]);
    }
  }
  return [].concat(sort(listSmall)).concat(listEqual).concat(sort(listBig));
};
const list = [5, 8, 7, 0, 2, 1, 4, 9, 3, 6];
console.log(sort(list));
```

## 오름차순, 내림차순
```js
const sort = function(list, orderBy) {
  if (list.length < 2) return list;
  const listSmall = [], listEqual = [], listBig = [];
  const compare = list[0];
  for (let index = 0; index < list.length; index++) {
    if (list[index] === compare) {
      listEqual.push(list[index]);
    } else if (list[index] < compare) {
      listSmall.push(list[index]);
    } else {
      listBig.push(list[index]);
    }
  }
  return orderBy && orderBy.toLowerCase() === 'desc'
    ? [].concat(sort(listBig, orderBy)).concat(listEqual).concat(sort(listSmall, orderBy))
    : [].concat(sort(listSmall, orderBy)).concat(listEqual).concat(sort(listBig, orderBy));
};
const list = [5, 8, 7, 0, 2, 1, 4, 9, 3, 6];
console.log(sort(list, 'desc'));
```
