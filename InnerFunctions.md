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
const string1 = '[1, 2, 3]';
const array1 = JSON.parse(string1);
const string2 = JSON.stringify(array1);
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

<!--
### Prototype과 toString()
```js
const a = {};
a.__proto__.toString = function() {
  return 123;
};
a.toString();
String(a);
String(a.toString());
```
-->

### JSON을 사용해 sessionStorage에 배열 넣기
```js
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
* membersStorage.html <- https://raw.githubusercontent.com/ovdncids/javascript-curriculum/master/docs/membersFunction.html

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

  ```js
  const membersSet = function() {
    const membersSet = JSON.stringify(members);
    sessionStorage.setItem('members', membersSet);
  };
  ```
  ```diff
  - const membersSet = JSON.stringify(members);
  - sessionStorage.setItem('members', membersSet);
  + membersSet();
  ```
  * ❕ 공통적으로 반복되는 부분을 함수로 만드는 작업(내부 구조 개선)을 리팩토링(Refactoring)이라 한다.
</details>

* VSCode 서로 다른 파일 비교하는 방법 설명

### document.write, location
document.html
```js
debugger;
document.write('documentWrite1');
document.write('documentWrite2');
document.write('documentWrite3');
document.writeln('documentWrite4');
document.writeln('documentWrite5');
document.writeln('documentWrite6<br>');
document.writeln('documentWrite7');
document.writeln('documentWrite8');
document.writeln('documentWrite9');
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
<script>
console.time('index1.js');
console.time('index2.js');
console.time('index3.js');
console.time('html bottom');
</script>
<script src="./index1.js"></script>
<script src="./index2.js"></script>
<script src="./index3.js"></script>
```

#### javascript 실행 순서 확인 하기
html/index1.js
```js
// debugger;
console.timeEnd('index1.js');
```

html/index2.js
```js
// debugger;
console.timeEnd('index2.js');
```

html/index3.js
```js
// debugger;
console.timeEnd('index3.js');
```

html/index.html (가장 아래에)
<!--
```html
<body>
  <script>
  // debugger;
  console.timeLog('html bottom');
  </script>
</body>
```
-->
```html
<script>
// debugger;
console.timeEnd('html bottom');
</script>
```

* ❕ Network 탭 설명
* ❕ `싱글 쓰레드(Single Thread)`, `멀티 쓰레드(Multi Thread)` 설명
* ❕ `동기(Sync)`, `비동기(Async)` 설명

```diff
- <script src="./index1.js"></script>
+ <script async src="./index1.js"></script>
```
* ❕ 따라서 `async`는 사용하지 않는다.

```diff
- <script async src="./index1.js"></script>
+ <script defer src="./index1.js"></script>
```
* ❕ `defer` 설명
* ❔ `defer` 다른 `.js` 파일에 적용 한다면
* ❔ `debugger;` 풀고, `index1.js`, `index2.js` 파일에서 `const test1 = 1;` 1번씩 사용한다면

### form 태그
* 주로 구글이나 네이버의 검색창에 사용 된다.

#### form 태그 넣기 (body 태그 안에 넣기)
form/membersForm.html
```html
<form method="get" action="./membersForm.html">
  <input type="text" name="input-text" value="초기값" placeholder="명령을 입력 하세요.">
  <input type="hidden" name="input-hidden" value="숨겨진값">
  <input type="submit" value="전송">
</form>
```
* `get` 메소드 설명 (포털 사이트에서 검색 후에 URL 주소를 복사해서, 다른 사람과 공유 할때 유용 하다. CRUD중 Read에 속함)
* `post` 메소드 설명 (CRUD중 Create, Update, Delete를 처리함)
* ❔ `action`을 `https://naver.com`으로 바꾼다면

#### onsubmit 메소드 추가
```diff
- <form method="get" action="./membersForm.html">
+ <form onsubmit="return false;">
```
* ❔ `return undefined;`, `return null;`, `return 0;`, `return NaN;`, `return true;` 변경 하기 `return testFunction();`
* ❔  `return false;`를 반환 하는 함수를 만들고, `testFunction` 상수에 넣기

#### form 태그 실습
* [데모](https://ovdncids.github.io/javascript-curriculum/form/membersForm.html)
* form/membersForm.js <- https://raw.githubusercontent.com/ovdncids/javascript-curriculum/master/docs/membersDocumentWrite.html

```diff
- <form onsubmit="return testFunction();">
+ <form onsubmit="return membersSubmit(this);">
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
  const inputTextObject = form['input-text'];
  try {
    const evalReturn = eval(inputTextObject.value);
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

#### Input.value CRUD
* `inputTextObject` 상수에서 `break point` 걸고, Console 창에서 실행
```js
// Input 객체 Create
inputTextObject.value = 'abc';

// Input 객체 Read
inputTextObject.a1 = inputTextObject.value;
inputTextObject.a2 = inputTextObject.value;

// Input 객체 Update
inputTextObject.value = 'membersDelete(0)';

// Input 객체 Delete
delete inputTextObject.value;
inputTextObject.value = '';
```

### pre 태그, document.getElementById
form/membersForm.html
```diff
- <script src="./membersForm.js"></script>
+ <script defer src="./membersForm.js"></script>
```
```html
<pre id="tag-pre"></pre>
```

form/membersForm.js
```diff
- for (let index in members) {
-   document.writeln(members[index]);
- }
```
```js
const tagPre = document.getElementById('tag-pre');
for (let index in members) {
  let innerHTML = tagPre.innerHTML + members[index];
  innerHTML += '\n';
  tagPre.innerHTML = innerHTML;
}
```
* ❔ `defer`를 뺀다면
* ❔ 문제: 다음을 한줄로 표현 하라
  ```js
  let innerHTML = tagPre.innerHTML + members[index];
  innerHTML += '\n';
  tagPre.innerHTML = innerHTML;
  ```
* <details><summary>정답</summary>

  ```js
  tagPre.innerHTML += members[index] + '\n';
  ```
</details>

#### Pre.innerHTML CRUD
* Console 창에서 실행
```js
const tagPre = document.getElementById('tag-pre');

// Pre 객체 Create
tagPre.innerHTML = 'abc';

// Pre 객체 Read
tagPre.a1 = tagPre.innerHTML;
tagPre.a2 = tagPre.innerHTML;

// Pre 객체 Update
tagPre.innerHTML = 'membersDelete(0)';

// Pre 객체 Delete
delete tagPre.innerHTML;
tagPre.innerHTML = '';
```

### Query string - get
```js
const queryString = new URLSearchParams(window.location.search);
const nameText = queryString.get('input-text');
```
* ❕ `new` 키워드는 `클래스`를 바탕으로 `오브젝트`를 만든다.
* <details><summary>클래스</summary>

  ```js
  class Class1 {
    v1 = '멤버 변수';
    m1 = function() {
      return '멤버 메소드';
    };
  }
  const class1 = new Class1();
  const c1 = class1.v1;
  const c2 = class1.m1();
  ```
  * ❔ `new` 키워드를 뺀다면
  * ❔ `Class1.v1`, `Class1.m1` 확인해 보기
</details>

### document.getElementsByName
```js
const inputTextObjects = document.getElementsByName('input-text');
const inputTextObject = inputTextObjects[0];
```

* ❔ 문제: 위의 두줄을 한줄로 표현 하라 (`inputTextObjects` 상수는 삭제)
* <details><summary>정답</summary>

  ```js
  const inputTextObject = document.getElementsByName('input-text')[0];
  ```
  * ❕ `document.getElementsByName` 메소드는 항상 `배열`을 반환한다.
</details>

* ❔ 문제: `input box`의 `value`값을, `Query string`의 `input-text`로 넣기
* <details><summary>정답</summary>

  ```js
  inputTextObject.value = nameText;
  ```
</details>

### Query string - getAll
```js
const inputHiddens = queryString.getAll('input-hidden');
const inputHidden = inputHiddens[0];
```

### focus, blur
```js
inputTextObject.focus();
// inputTextObject.blur();
```

### 새로 고침 없이 회원 CRUD
* [데모](https://ovdncids.github.io/javascript-curriculum/form/membersNoRefresh.html)
* form/membersNoRefresh.html <- https://raw.githubusercontent.com/ovdncids/javascript-curriculum/master/docs/form/membersForm.html
* form/membersNoRefresh.js <- https://raw.githubusercontent.com/ovdncids/javascript-curriculum/master/docs/form/membersForm.js

#### Read
form/membersNoRefresh.html
```diff
- <script defer src="./membersForm.js"></script>
+ <script defer src="./membersNoRefresh.js"></script>
```

form/membersNoRefresh.js
``` diff
- for (let index in members) {
-   tagPre.innerHTML += members[index] + '\n';
- }
```
```js
tagPre.innerHTML = '';
for (let index in members) {
  tagPre.innerHTML += '<input type="text" name="members-name" value="' + members[index] + '">';
  tagPre.innerHTML += '<button onclick="membersDelete(' + index + ')">Delete</button>';
  tagPre.innerHTML += '\n';
}
console.log('Readed', members);
```

#### Delete
``` diff
const membersDelete = function(index) {
- return members;
+ return membersRead();
```

#### Update
form/membersNoRefresh.js
```js
tagPre.innerHTML += '<button onclick="membersUpdate(' + index + ')">Update</button>';
```

```diff
- const membersUpdate = function(index, member) {
-   members[index] = member;
-   membersSet();
-   return members;
- };
```
```js
const membersUpdate = function(index) {
  const name = ❔ 문제
  members[index] = name;
  membersSet();
  return membersRead();
};
```

#### Create
form/membersNoRefresh.html
```diff
- <form method="get" onsubmit="return membersSubmit(this);">
+ <form method="get" onsubmit="membersCreate(this); return false;">
```

form/membersNoRefresh.js
```diff
- const membersCreate = function(member) {
-   members.push(member);
-   membersSet();
-   return members;
- };
```
```js
const membersCreate = function(form) {
  const inputTextObject = form['input-text'];
  members.push(❔ 문제);
  membersSet();
  return membersRead();
};
```
* `membersSubmit` 메소드 삭제
* ❔ 문제: `create` 후 입력된 `input box`의 문자 지우기

### div 태그 복사
form/membersNoRefresh.html

* div 태그 설명
```diff
- <pre id="tag-pre"></pre>
```
```html
<div id="tag-div-parent"></div>
<div style="display: none;">
  <div id="tag-div-child">
    <input type="text" name="members-name" value="">
    <button name="members-update" onclick="membersUpdate(index)">Update</button>
    <button name="members-delete" onclick="membersDelete(index)">Delete</button>
  </div>
</div>
```

form/membersNoRefresh.js
```diff
- const membersRead (삭제)
```
```js
const membersRead = function() {
  const tagDivParent = document.getElementById('tag-div-parent');
  const tagDivChild = document.getElementById('tag-div-child');
  tagDivParent.innerHTML = '';
  for (let index in members) {
    const newDivChild = tagDivChild.cloneNode(true);
    tagDivParent.appendChild(newDivChild);
  }
  console.log('Readed', members);
  return members;
};
```

#### DOM 객체 접근하기
form/membersNoRefresh.js
```js
const membersNameObject = document.getElementsByName('members-name')[index];
const membersUpdateObject = document.getElementsByName('members-update')[index];
const membersDeleteObject = document.getElementsByName('members-delete')[index];
membersNameObject.value = members[index];
membersUpdateObject.index = index;
membersDeleteObject.index = index;
```
* ❕ `onclick` 안에 `index` 설명

### 회원 정보에 나이 추가
* [데모](https://ovdncids.github.io/javascript-curriculum/form/membersObject.html)

#### Create
form/membersNoRefresh.html
```diff
- <input type="text" name="input-text" value="" placeholder="Name">
- <input type="hidden" name="input-hidden" value="숨겨진값">
```
```html
<input type="text" name="member-name" value="" placeholder="Name">
<input type="text" name="member-age" value="" placeholder="Age">
```

form/membersNoRefresh.js
```diff
- const inputTextObject = form['input-text'];
- members.push(inputTextObject.value);
- inputTextObject.value = '';
```
```js
const memberNameObject = form['member-name'];
const memberAgeObject = form['member-age'];
members.push({
  name: memberNameObject.value,
  age: memberAgeObject.value
});
memberNameObject.value = '';
memberAgeObject.value = '';
```

#### Read
form/membersNoRefresh.html
```html
<input type="text" name="members-age" value="">
```

form/membersNoRefresh.js
```js
const membersAgeObject = document.getElementsByName('members-age')[index];
```
```diff
- membersNameObject.value = members[index];
```
```js
membersNameObject.value = members[index].name;
membersAgeObject.value = members[index].age;
```

#### Update
* ❔ 문제: Update 구현하기
* <details><summary>정답</summary>

  ```js
  const age = document.getElementsByName('members-age')[index].value;
  ```
  ```diff
  - members[index] = name;
  ```
  ```js
  members[index] = {
    name: name,
    age: age
  };
  ```
</details>
