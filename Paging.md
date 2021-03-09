# Paging

* [데모](https://ovdncids.github.io/javascript-curriculum/paging)

## 목표
Paging의 원리를 알아 보자

## 기본 Paging

### 데이터 만들기
```js
const numbersOrigin = [];
for (let index = 1; index <= 201; index++) {
  numbersOrigin.push(index);
}
```

### 해당 페이지 번호를 받는 함수 만들기
```js
const paging = function(pageNumber, pageSize) {
  pageNumber = pageNumber >= 1 ? pageNumber : 1;
  pageSize = pageSize >= 1 ? pageSize : 10;
}
```
* pageNumber은 1보다 작은수, 음수, undifined 등을 1로 정의 한다.
* pageSize는 1보다 작은수, 음수, undifined 등을 10으로 정의 한다.
* ❔ 문제: `pageStartNumber`이라는 상수를 만들고, `pageNumber` 변화에 따른 `numbersOrigin`가 사용할 `index` 값을 구해서, `pageStartNumber` 상수에 넣고, `return` 하기

  | pageNumber | pageStartNumber |
  |---|:---|
  | 1 | 0 |
  | 2 | 10 |
  | 3 | 20 |
  | 4 | 30 |
  | 5 | 40 |
  | ... | ... |
* <details><summary>정답</summary>

  ```js
  const pageStartNumber = (pageNumber - 1) * pageSize;
  return;
  ```
</details>

### pageSize 만큼 for문 돌리기
```js
  const numbersPaging = [];
  for (let index = 0; index < pageSize; index++) {
    const numbersOriginIndex = numbersOrigin[index];
    numbersPaging.push(numbersOriginIndex);
  }
  return numbersPaging;
```
* ❔ 문제: `numbersOriginIndex`에 `pageStartNumber`값 연결 하기
* <details><summary>정답</summary>

  ```js
  numbersPaging.push(numbersOrigin[pageStartNumber + index]);
  ```
</details>

* ❔ 문제: 개발자 도구에서 `paging(21)` 입력해보고, `undefined`일 경우 `if문`을 사용하여 `numbersPaging`에 넣지 말기
* <details><summary>정답</summary>

  ```js
  if (numbersOrigin[pageStartNumber + index]) {
    numbersPaging.push(numbersOrigin[pageStartNumber + index]);
  }
  ```
</details>
