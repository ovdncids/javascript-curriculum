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
* 브라우저에서 사용하는 DB로 쿠키와 비슷하다고 생각하면 된다.

### sessionStorage CRUD
```js
// storageGet Create
sessionStorage.setItem('ss1', 1);
sessionStorage.setItem('ss2', '이');
sessionStorage.setItem('ss3', undefined);

// storageGet Read
const ss1 = sessionStorage.getItem('ss1');
const ss2 = sessionStorage.getItem('ss2');
const ss3 = sessionStorage.getItem('ss3');

// storageGet Update
sessionStorage.setItem('ss1', [1, 2, 3]);
sessionStorage.setItem('ss2', {
  key1: 'value1'
});
sessionStorage.setItem('ss3', function() {});

// storageGet Delete
sessionStorage.removeItem('ss1');
sessionStorage.clear();
```
* sessionStorage 저장 기간: 새로고침 해도 남아 있지만, 해당 탭이 닫히면 사라진다.
* localStorage 저장 기간: 영구 보관이 기본이나, 브라우저에 따라 모바일 환경에 따라 다르다. 용량은 5MB까지
* ❔ `sessionStorage`를 `localStorage` 변경하여 확인 하기

### JSON을 사용해 sessionStorage에 배열 넣기
```js
debugger;
const storageGet = sessionStorage.getItem('array2');
const storageLogical = storageGet || '[1, 2, 3]';
const array2 = JSON.parse(storageLogical);
const plus1 = array2.length + 1;
array2.push(plus1);
const storageSet = JSON.stringify(array2);
sessionStorage.setItem('array2', storageSet);
```

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

* VSCode 서로 다른 파일 비교하는 방법 설명

### document.write, location
```js
debugger;
document.write('documentWrite1');
document.write('documentWrite2');
document.write('documentWrite3');
document.writeln('documentWrite4');
document.writeln('documentWrite5');
document.writeln('documentWrite6');
// window.location.reload();
// window.location.href = 'https://naver.com';
// window.history.back();
```

#### document.write, location 실습
* [데모](https://ovdncids.github.io/javascript-curriculum/membersDocumentWrite.html)
* documentWrite.html <- https://raw.githubusercontent.com/ovdncids/javascript-curriculum/master/docs/membersStorage.html

* membersRead 추가
```js
for (let index in members) {
  document.writeln(members[index]);
}
```
* membersCreate, membersDelete, membersUpdate에 추가
```js
window.location.reload();
```
* ❔ `데모`와 동일하게 만드려면?

## document 객체
### html 태그
html/index.html

#### html 기본 구조 만들기
```sh
!키 입력 후 탭키 누르기
```

#### .js 파일 부르기 (head 태그 안에 넣기)
```html
<script defer src="./index1.js"></script>
<script src="./index2.js"></script>
<script src="./index3.js"></script>
```
* ❕ Network 탭 설명 하기

#### javascript 실행 순서 확인 하기
html/index1.js
```
debugger;
console.log('index1.js');
```

html/index2.js
```
debugger;
console.log('index2.js');
```

html/index3.js
```
debugger;
console.log('index3.js');
```

html/index.html (가장 아래에)
```html
<script>
debugger;
console.log('html bottom');
</script>
```

* ❕ `defer` 설명
* ❕ `싱글 쓰레드(Single Thread)`, `멀티 쓰레드(Multi Thread)` 설명
* ❕ `동기(Sync)`, `비동기(Async)` 설명
```html
<script async src="./index1.js"></script>
```
* ❕ 따라서 `async`는 사용하지 않는다.
* ❔ `form1.js`, `form2.js` 파일에서 `const test1 = 1;` 1번씩 사용한다면

### form 태그
form/membersForm.html

#### from 태그 넣기 (body 태그 안에 넣기)
```html
<form method="get" action="./form.html">
  <input type="text" name="text-name" value="초기값" placeholder="명령을 입력 하세요.">
  <input type="hidden" name="hidden-name" id="form-hidden" value="숨겨진값">
  <input type="submit" value="전송">
</form>
```
* `get`, `post` 메소드 설명
* ❔ `action`을 `https://naver.com`으로 바꾼다면

#### from 태그 실습
* [데모](https://ovdncids.github.io/javascript-curriculum/form/membersForm.html)
* form/membersForm.js <- https://ovdncids.github.io/javascript-curriculum/membersDocumentWrite.html

#### onsubmit 메소드 추가
```diff
- <form method="get" action="./form.html">
+ <form method="get" action="./form.html" onsubmit="return false;">
```
* ❔ `return undefined;`, `return null;`, `return 0;`, `return NaN;`, `return true;` 변경 하기
```html
<form method="get" action="./form.html" onsubmit="return membersSubmit(this);">
```

#### .js 파일 부르기 (head 태그 안에 넣기)
```html
<script src="./membersForm.js"></script>
```

#### form/membersForm.js
```diff
- window.location.reload();
```
```js
const membersSubmit = function(form) {
  const textNameObject = form['text-name'];
  try {
    const evalReturn = eval(textNameObject.value);
    console.log(evalReturn);
  } catch(error) {
    console.error(error);
    alert(error);
    return false;
  }
}
```
* `eval` 설명
* ❔ `eval` 대신 `JSON.parse`를 사용한다면

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval

### pre 태그, document.getElementById
form/membersForm.html
```diff
- <script src="./form.js"></script>
+ <script defer src="./form.js"></script>
```
```html
<pre id="pre-tag"></pre>
```

form/membersForm.js
```diff
- for (let index in members) {
-   document.write(members[index] + ' ');
- }
```
```js
const preTag = document.getElementById('pre-tag');
for (let index in members) {
  let innerHTML = preTag.innerHTML + members[index];
  innerHTML += '\n';
  preTag.innerHTML = innerHTML;
}
```
* ❔ `defer`를 뺀다면
* ❔ 다음을 한줄로 표현 한다면
  ```js
  let innerHTML = preTag.innerHTML + members[index];
  innerHTML += '\n';
  preTag.innerHTML = innerHTML;
  ```
* <details><summary>정답</summary>

  ```js
  preTag.innerHTML += members[index] + '\n';
  ```
</details>



### class 추가 삭제
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

<!-- ### activeElement
* focus된 엘리먼트를 반환한다. focus가 된곳이 없다면 <Body> 또는 <html>을 반환한다.
```
const activeElement = document.activeElement;
``` -->

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
