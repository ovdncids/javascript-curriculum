# 로직들

## 리스트 중간에 광고글 끼워 넣기
```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const b = ['a', 'b', 'c'];
const c = [];
const t = 3;
for (let index = 0; index < a.length; index++) {
  c.push(a[index]);
  if (index % t === t - 1) {
    const bIndex = Math.floor(index / t) % t;
    c.push(b[bIndex]);
  }
}
console.log(a);
console.log(b);
console.log(c);
```

## 두 배열에 있는 가장 작은 공통인 수 구하기
```js
const a = [1, 4, 5, 6, 8];
const b = [2, 3, 4, 8];
let j = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] > b[j]) {
    j++;
  }
  console.log(a[i], b[j]);
  if (a[i] === b[j]) {
    console.log('정답: ', a[i]);
    break;
  }
}
```
* 해당 로직에서 `틀린 부분`을 수정 하라. (최대 2줄 수정 가능)
<!--
```diff
- if
+ while
```
-->
