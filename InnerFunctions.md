# 내장 함수 (Inner Functions)

## window 객체
window.html
```html
<script>
</script>
```

### var를 이용해서 변수 선언
```js
var v1 = 'a';
v2 = 'b';
const condition1 = v1 === window.v1;
const condition2 = v2 === window.v2;
```
* IE11 이후 부터 var는 사용하지 않는다.
* 여러 파일에서 동시에 사용 해야할 경우 `window.변수명` 이렇게 명시화 해서 사용한다.
```js
window.v3 = 'c';
```

### window 객체 안으로 function 만들기
```js
function f1() {}
const condition3 = f1 === window.f1;
```

### confirm, alert, console.log
```js
if (window.confirm('진행 하시겠습니까?')) {
  window.console.log('진행');
} else {
  window.alert('멈춤');
}
```
* `window` 안에 요소들은 `window.` 생략 가능

### JSON
```js
const array1 = JSON.parse('[1, 2, 3]');
const string1 = JSON.stringify(array1);
```

### sessionStorage, localStorage
```js
debugger;
const storageGet = sessionStorage.getItem('array2');
const storageLogical = storageGet || '[1, 2, 3]';
const array2 = JSON.parse(storageLogical);
const nextNumber = array2.length + 1;
array2.push(nextNumber);
const storageSet = JSON.stringify(array2);
sessionStorage.setItem('array2', storageSet);
```
* sessionStorage 저장 기간: 새로고침 해도 남아 있지만, 해당 탭이 닫히면 사라진다.
```js
sessionStorage.removeItem('array2');
sessionStorage.clear();
```
* ❔ `sessionStorage`를 `localStorage` 변경하여 확인 하기
* localStorage 저장 기간: 영구 보관이 기본이나, 브라우저에 따라 모바일 환경에 따라 다르다. 용량은 5MB까지
* sessionStorage, localStorage CRUD 설명

#### sessionStorage, localStorage 실습
* [데모](https://ovdncids.github.io/javascript-curriculum/membersStorage.html)
* storage.html <- https://raw.githubusercontent.com/ovdncids/javascript-curriculum/master/docs/membersFunction.html

```diff
- const members = [];
```
```js
const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);
```

* membersCreate, membersDelete, membersUpdate에 추가
```js
const membersSet = JSON.stringify(members);
sessionStorage.setItem('members', membersSet);
```

* ❔ 문제: 리팩토링
  ```
  1. `membersCreate`, `membersDelete`, `membersUpdate`에 추가된 `공통 부분`을 `함수`로 만들고, `membersSet` `Script 상수`에 넣고
  2. `membersCreate`, `membersDelete`, `membersUpdate`에서 `membersSet` 실행 시키기
  ```
* <details><summary>정답</summary>

  ```diff
  - const membersSet = JSON.stringify(members);
  - sessionStorage.setItem('members', membersSet);
  + membersSet();
  ```
  ```js
  const membersSet = function() {
    const membersSet = JSON.stringify(members);
    sessionStorage.setItem('members', membersSet);
  };
  ```
  * ❕ 공통적으로 반복되는 부분을 함수로 만드는 작업(내부 구조 개선)을 리팩토링(Refactoring)이라 한다.
</details>

* VSCode 서로 다른 파일 비교 설명

### document.write, location
```js
debugger;
document.write('documentWrite1');
document.write('documentWrite2');
window.location.reload();
window.location.href = 'https://naver.com';
```

#### document.write, location 실습
* [데모](https://ovdncids.github.io/javascript-curriculum/membersDocumentWrite.html)
* documentWrite.html <- https://raw.githubusercontent.com/ovdncids/javascript-curriculum/master/docs/membersStorage.html

```js
for (let index in members) {
  document.write('<div>' + members[index] + '</div>');
}
```
```js
window.location.reload();
```
* ❔ 위에 2부분을 `documentWrite.html` 파일 어디에 넣어야 할까?

## document 객체
### form 태그
form.html
```html
<form method="get">
  <input type="text" name="text-name" value="초기값" placeholder="입력 하세요.">
  <input type="hidden" name="hidden-name" id="form-hidden" value="hidden-value">
  <input type="submit" value="전송">
</form>
```


<!-- * `defer` 설명, `쓰레드` 개념 설명
* ❔ 서로 다른 파일에서 1번씩 사용한다면 -->



## class 추가 삭제
```html
<!-- 추가 -->
document.getElementById('').classList.add('');
<!-- 삭제 -->
document.getElementById('').classList.remove('');
<!-- 첫번째 클래스명 -->
document.getElementById('').classList[0];
<!-- 클래스 개수 -->
document.getElementById('').classList.length;
<!-- 토글 클래스 -->
document.getElementById('').classList.toggle('active');
```

## form 태그
* Ajax 이전에 데이터를 서버에 전송하는 방식(get, post 메소드만 사용가능)

formA.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>From A</title>
  </head>
  <body>
    <h1>From A</h1>
    <form method="get" action="./formB.html">
      <input type="text" name="name" placeholder="이름" />
      <input type="submit" value="전송" />
    </form>
  </body>
</html>
```

formB.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>From B</title>
    <script>console.log(window.location);</script>
  </head>
  <body>
    <h1>From B</h1>
  </body>
</html>
```
* Frontend와 Backend의 차이점은?

## window.location
```js
console.log(window.location);
window.location.href = './list.html';
```

## window.history.back
```js
window.history.back();
```

## Event
### onkeypress
```html
<input type="text" onkeyup="console.log(event)" />
```

### onchange
```html
<input type="date" onchange="console.log(event)" />
```

## QueryString
```js
const url = new URL(window.location.href);
const queryString = url.searchParams;

console.log(queryString.get('a'));
console.log(queryString.getAll('a'));
```

## Orderby Icon
```html
<a href="?orderByName=name&orderByType=asc"><i class="bi bi-caret-up" id="i-name-asc"></i></a>
<a href="?orderByName=name&orderByType=desc"><i class="bi bi-caret-down" id="i-name-desc"></i></a>
```
```js
const orderByName = queryString.get('orderByName') || 'name';
const orderByType = queryString.get('orderByType') || 'desc';
const classList = document.getElementById('i-' + orderByName + '-' + orderByType).classList;
const className = classList[1];
classList.remove(className);
classList.add(className + '-fill');
```
