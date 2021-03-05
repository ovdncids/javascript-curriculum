# Javascript

## 목표
Backend의 데이터를 받아서 Frontend에서 자유롭게 데이터 핸들링(CRUD: [Create, Read, Update, Delete]) 하기 위함이다.

## 역사
https://caniuse.com

# 기본 문법

## 테스트 문서 파일 만들기
variable.html
```html
<script>
</script>
```

## 변수 (Variable)
### 변수를 사용하는 이유
1. 자료형 데이터를 보관 할 수 있고, 자유롭게 값을 수정 할 수 있다.
```js
let v1 = true;
let v2 = 100;
let v3 = 'abc';
console.log(v1, v2, v3);
v1 = false;
v2 = -10;
v3 = 'def';
console.log(v1, v2, v3);
```
* 자료형에는 `Boolean`(true, false), `Number`(숫자), `String`(문자) 3가지가 주로 쓰인다.
* `let` 선언문 설명
* `console.log();` 설명
* ❔ `v1` 변수에 let을 2번 선언 한다면
* ❔ 선언 하지 않은 `v4` 변수를 `console.log(v4);`로 찍는다면
* `변수`에 대한 `CRUD` 설명
* ❕ `변수명`에 대한 규칙
  ```
  제어문 이름으로 사용 불가 (if, for, switch, while, ...)
  연산자 이름으로 사용 불가 (+, -, *, /, ==, !, <, >, this, ...)
  자료형 또는 예약어 사용 불가 (true,  false, null, NaN, delete, ...)
  숫자를 앞으로 사용 불가 (1a, 2b, ...)
  주로 `Camel(낙타) 표기법`으로 사용 (carUse, busTake, ...)
  ```

2. `debugger`에서 연산의 과정을 볼 수 있다.
```js
debugger;
console.log(1 + 2 + 3);
let num1 = 1;
let num2 = 2;
let num3 = 3;
let sum1 = num1 + num2;
let sum2 = sum1 + num3;
console.log(sum2);
```
* breakpoint 설명

3. 변수 수정으로 프로그램 전체를 수정 가능하다.
```js
let calc = 100;
console.log(calc + 10);
console.log(calc - 10);
console.log(calc * 10);
console.log(calc / 10);
```
* ❔ 변수 `calc` 값 수정해 보기

### 한줄에 변수 여러개 선언하기 (선언문)
```js
let a, b, c;
```
* ❔ 문제: 한줄로 변수 `a, b, c`에 각각 `1, 2, 3` 넣어 보기
* <details><summary>정답</summary>

  ```js
  let a = 1, b = 2, c = 3;
  ```
</details>

## 상수 (Constant)
### 상수를 사용하는 이유
1. 한번 선언된 값의 변경을 막기 위해 사용 한다.
```js
const c1 = true;
const c2 = 100;
const c3 = 'abc';
console.log(c1, c2, c3);
```
* ❔ c1 상수에 const을 2번 선언 한다면
* ❔ c1 상수에 값을 변경해 보기
* 수에 대한 CRUD 설명

## 연산자 (Operator)
1. 문자에 대한 4칙 연산자 (`+, -, *, /`)
```js
let string1 = '1';
let string2 = '2';
let result1 = string1 - string2;
let result2 = string1 * string2;
let result3 = string1 / string2;
let result4 = string1 + string2;
```
* ❔ `string1` 값을 숫자 `1`로 바꾼다면
* ❔ `string1` 값을 'a'로 `string2` 값을 'b'로 바꾼다면
* ❔ 문제: 다음의 `r` 값은?
  ```js
  let r = 2 - '1' + 'a';
  ```
* <details><summary>정답</summary>

  ```js
  '1a'
  ```
</details>

2. ==(동등 연산자) 연산자와 ===(일치 연산자) 연산자의 차이
```js
let char1 = true == 'true';
let char2 = true === 'true';
let true1 = 1 == true;
let true2 = 1 === true;
let false1 = 0 != false;
let false2 = 0 !== false;
let oNum1 = 1 == '1';
let oNum2 = 1 === '1';
```
* ❕ 연산이 끝나면 `Boolean` 형식으로 결과를 반환한다.
* ❕ 위와 같은 이유로 `동등 연산자`는 사용하지 않는다.
* ❔ 문제: `1`과 `2`를 `일치 연산자`로 비교 후에 상수 `x`에 넣고, `x`를 `console.log`로 찍어 보기
* <details><summary>정답</summary>

  ```js
  const x = 1 === 2;
  console.log(x);
  ```
</details>

3. 비교 연산자 (<, <=, >, >=)
```js
let compare1 = 1 < 1;
let compare2 = 2 <= 2;
let compare3 = 3 > 3;
let compare4 = 4 >= 4;
```

4. 소괄호() 연산자
```js
let roundBracket1 = (1 === '1');
let roundBracket2 = ((1 + 2) * 3);
```
* ❕ `소괄호 연산자`는 `4칙 연산자`보다 우선 순위를 갖는다.
* ❔ 문제: `소괄호 연산자` 안에서 `true`와 `false`를 `일치 연산자`로 연산 후에 상수 'y'에 넣고, `y`를 `console.log`로 찍어 보기
* <details><summary>정답</summary>

  ```js
  const y = (true === false);
  console.log(y);
  ```
</details>

## if문(제어문 > 조건문)
```js
if (조건 1) {
  // 조건 1이 참인 경우 실행
} else if (조건 2) {
  // 조건 2가 참인 경우 실행
} else {
  // 해당 되는 조건이 없을 경우 실행
}
```
* 조건은 주로 연산자에서 `Boolean` 형식으로 받는다.
* ❕ 거짓 조건은 `false`, `0`, `null`, `undefined`이고, 나머지는 모두 참인 조건이 된다.
```js
debugger;
let d1;
// 선언 하고 값을 넣지 않으면 undefined
let d2 = null;
// 선언 하고 null 값을 넣으면 null
let condition1 = d1 == d2;
let condition2 = d1 === d2;
```
* ❔ 문제: 조건이 `1 === 1`인 `if`문을 만들고, 참인 경우 `console.log('참');`을 찍어 보기
* <details><summary>정답</summary>

  ```js
  if (1 === 1) {
    console.log('참');
  }
  ```
</details>

## 배열
array.html
```html
<script>
</script>
```

### 배열을 사용하는 이유
1. 순차적인 반복 작업에 사용한다. (주로 동일한 데이터 타입으로 묶인 경우가 많다.)

### 배열 선언
```js
const array1 = [];
const array2 = [1, 2, 3];
```
https://t1.daumcdn.net/blogfile/fs8/27_25_21_25_0O7Ul_IMAGE_0_42.jpg?original&filename=42.jpg

### 배열의 CRUD
```js
// 배열 Create
array1.push(1);
array1.push('2');
array1.push('삼');

// 배열 Read
array1[0];
array1[1];
array1[2];

// 배열 Update
array1[0] = undefined;
array1[1] = false;
array1[2] = true;

// 배열 Update
array1.splice(0, 1);
array1.splice(1, 1);
array1.splice(2, 1);
```

### 배열의 크기
```js
const length1 = array1.length;
const length2 = array2.length;
const lastValue = array1[array1.length - 1];
```
* ❕ `lastValue`는 `array1` 배열의 마지막 요소 값을 받는다.

### 배열의 성격
```js
let arr1 = [];
let arr2 = [];
const quiz1 = arr1[1];
if (arr1) {
  console.log('참');
} else {
  console.log('참');
}
const quiz2 = arr1 === arr2;
```
* ❔ 해당 배열이 가진 크기보다 큰 값을 사용 한다면?
* ❔ `빈 배열`은 참일까 거짓일까?
* ❔ 문제: `array1`와 `array2는` 같을까?
* <details><summary>정답</summary>

  배열은 선언과 동시에 별도의 `메모리 공간`에 존재하고, 변수는 단지 해당 배열이 있는 `메모리 주소`를 가지고 있다.
  따라서 `arr1`과 `arr2`는 서로 다른 배열의 주소를 가지므로 같지 않다.
  만약 `arr1` 변수의 값을 변화 시킨다면, `메모리 주소`를 잃어 버리므로 해당 배열은 더이상 접근할 수 없게 된다.
  ```
</details>

### 익명 배열
```js
console.log([1, 2, 3]);
```
* 해당 배열의 `메모리 주소`를 누구도 받지 않으므로 재사용 할 수 없다.

### 배열 실습
* 1 부터 5까지 더하기(total 변수를 만들어서 한번씩 더해서 만듬)
```js
const testArray1 = [1, 2, 3, 4, 5];
let total1 = testArray1[0];
total1 = total1 + testArray1[1];
total1 = total1 + testArray1[2];
total1 += testArray1[3];
total1 += testArray1[4];
```

* `testArray1` 평균 구하기
```js
const avg = total1 / testArray1.length;
```

* `testArray1` 홀수만 더하기
```js
const even1 = testArray1[0] + testArray1[2] + testArray1[4];
```

* 홀수만 지우기
```js
testArray1.splice(0, 1);
testArray1.splice(1, 1);
testArray1.splice(2, 1);
```

## for문(제어문 > 반복문)
### for문을 사용하는 이유
* `for ([초기문]; [조건문]; [증감문])`, `index++`, `++index`, `break`, `continue`
* ❔ 위에 문제를 `for`문을 사용해서 만들기(짝수 구하는 공식: 값 % 2)
* ❔ `Scope`, 초기문과 같은 이름이 `for`문 위에 쓰여졌다면(같은 이름의 변수를 호출 하려면)
* 가림 현상 설명, Ctrl 키를 눌러서 해당 변수 이동(마우스 오버해보기), `대소문자` 구분
* `window var` 설명
* ❔ 배열 복사하기, `[] === []` 확인, 메모리란?
* ❔ 배열을 `const`로 사용하는 이유

## 함수
### 함수를 사용하는 이유
1. 여러 파일에서 동일한 작업을 하는 경우, 반복을 피할 수 있다
* `DRY`(Don't repeat yourself)
* 기본형, `익명 함수`
* `선언` 하거나, `()`, `[]`에서만 사용, 괄호 연산자 설명
* ❔ 배열에 익명 함수 3개 넣기
* 기본 동작, console 찍기, 값 넘기기(인자명은 내부적으로 `let 인자명 = 넘긴값` 이렇게 작동함)
* 변수 넘기기, 배열 넘기기, 변수의 비교
* `return` 설명 하기
* ❔ 위에 문제를 `function`문을 사용해서 만들기
* 특정 함수의 모음 라이브러리
* ❔ 함수 넘기기고 넘어간 함수 실행하기(`익명 함수`로 바꾸어 넘겨 보기)

## 오브젝트
### 오브젝트를 사용하는 이유
1. 효율적인 관리를 위해 여러 변수를 한곳에 묶어서 사용한다
* 기본형, `익명 오브젝트`
* `선언` 하거나, `()`, `[]`에서만 사용, 이 밖이면 그냥 블럭임
* `Key`는 `영문, 숫자, _`를 쓸 수 있다.
* `Value`는 `모든 데이터 형식`을 쓸 수 있다(`function` 포함)
* `CRUD`, 선언 후 추가 하기, 지우기 `delete`
* ❔ 동일한 이름의 키를 선언한 경우
* ❔ object.0 비교 array.0
* `오브젝트` 안의 `function`에서 `this 연산자` 만들기(수정 해보기)
* ❔ objectParent > objectChild > 함수에서 `this`
* `window.alert`을 수정하기
* `for in`
* ❔ 사용자의 이름, 나이를 가진 `오브젝트`를 만들고 `for in`으로 출력하기
* ❔ 사용자의 이름, 나이를 가진 `오브젝트` 4개를 만들어 배열에 넣고, for문으로 출력하기


## try catch문(제어문 > 예외처리문)
### try catch문을 사용하는 이유?
1. 에러가 발생할 경우 처리를 위해 사용한다
* 기본형

## 기타
* ❔ 서로 다른 파일에서 1번씩 사용한다면
* `&&, ||, &, |` 설명
* `3항 연산자`
* `defer` 설명, `쓰레드` 개념 설명

<!-- javascript 수정은 함수에서 버튼 만들어서
Document.written ← 줄바꿈
로컬 저장소를 바탕으로 CRUD 만들기 -->

