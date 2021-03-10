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
* `pageNumber`은 1보다 작은수, 음수, undifined 등을 1로 정의 한다.
* `pageSize`는 1보다 작은수, 음수, undifined 등을 10으로 정의 한다.
* ❔ 문제: `pageStartIndex`이라는 상수를 만들고, 다음과 같이 연산 후, `pageStartIndex` 상수 `return` 하기
  | pageNumber | pageStartIndex |
  |---|:---|
  | 1 | 0 |
  | 2 | 10 |
  | 3 | 20 |
  | 4 | 30 |
  | 5 | 40 |
  | ... | ... |

* <details><summary>힌트</summary>

  | pageNumber | pageStartIndex |
  |---|:---|
  | 1 | 10 |
  | 2 | 20 |
  | 3 | 30 |
  | 4 | 40 |
  | 5 | 50 |
  | ... | ... |

</details>

* <details><summary>정답</summary>

  ```js
  const pageStartIndex = (pageNumber - 1) * pageSize;
  return;
  ```
</details>

### pageSize 만큼 for문 돌리기
```diff
- return pageStartIndex;
```
```js
const numbers = [];
for (let index = 0; index < pageSize; index++) {
  const numbersOriginIndex = numbersOrigin[index];
  numbers.push(numbersOriginIndex);
}
return numbers;
```
* ❔ 문제: `numbersOriginIndex` 값에 `pageStartIndex`값 연결 하기
* <details><summary>정답</summary>

  ```js
  numbers.push(numbersOrigin[index + pageStartIndex]);
  ```
</details>

* ❔ 문제: 개발자 도구에서 `paging(21)` 입력해보고, `값`이 있는 경우만 `if문`을 사용하여 `numbers`에 넣기
* <details><summary>정답</summary>

  ```js
  if (numbersOriginIndex) {
    numbers.push(numbersOriginIndex);
  }
  ```
</details>

## Page Navigation 만들기 (선택)
### navSize 만들 반복하기
```js
const navPaging = function(pageNumber, pageSize, navSize) {
  pageNumber = pageNumber >= 1 ? pageNumber : 1;
  pageSize = pageSize >= 1 ? pageSize : 10;
  navSize = navSize >= 1 ? navSize : 10;
  const navs = [];
  for (let index = 1; index <= navSize; index++) {
    const navCalc = index;
    navs.push(navCalc);
  }
  return navs;
}
```
* ❔ 문제: `navCalc` 값에 `pageNumber`에 대응하는 연산식 만들기
  | pageNumber | navCalc |
  |---|:---|
  | 1 ~ 10 | 1 |
  | 2 ~ 20 | 11 |
  | 3 ~ 30 | 21 |
  | 4 ~ 40 | 31 |
  | 5 ~ 50 | 41 |
  | ... | ... |

  `힌트`: Math.ceil() (올림 내장 함수)
* <details><summary>연산 과정</summary>

  `1`. 연산 결과를 `올림` 하여 `pageNumber`가 1 ~ 10일 경우 `navCalc` 값이 `1`이 되게 만들기
  | pageNumber | navCalc |
  |---|:---|
  | 1 ~ 10 | 1 |
  | 2 ~ 20 | 2 |
  | 3 ~ 30 | 3 |
  | 4 ~ 40 | 4 |
  | 5 ~ 50 | 5 |
  | ... | ... |

  `2`. 다음과 같이 연산 되게 만들기
  | pageNumber | navCalc |
  |---|:---|
  | 1 ~ 10 | 10 |
  | 2 ~ 20 | 20 |
  | 3 ~ 30 | 30 |
  | 4 ~ 40 | 40 |
  | 5 ~ 50 | 50 |
  | ... | ... |

  `3`. 다음과 같이 연산 되게 만들기
  | pageNumber | navCalc |
  |---|:---|
  | 1 ~ 10 | 0 |
  | 2 ~ 20 | 10 |
  | 3 ~ 30 | 20 |
  | 4 ~ 40 | 30 |
  | 5 ~ 50 | 40 |
  | ... | ... |

  `4`. `연산값`을 index값에 연결 하기
</details>

* <details><summary>정답</summary>

  ```js
  const navCalc = Math.ceil(pageNumber / navSize) * navSize - navSize + index;
  ```
</details>
