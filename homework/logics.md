# 로직들

## 리스트 중간에 광고글 키워 넣기
```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const b = ['a', 'b', 'c'];
const c = [];
const t = 3;
for (let index = 0; index < a.length; index++) {
  c.push(a[index])
  if (index % t === t - 1) {
    const bIndex = Math.floor(index / t) % t;
    c.push(b[bIndex]);
  }
}
console.log(a);
console.log(b);
console.log(c);
```
