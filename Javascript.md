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
  자료형 또는 예약어 사용 불가 (true, false, null, NaN, delete, ...)
  숫자를 앞으로 사용 불가 (1a, 2b, ...)
  대소문자 구분 (lowUP, LowUp, LOWUP)
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
constant.html
```html
<script>
</script>
```

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
* 상수에 대한 CRUD 설명

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
let true3 = 1 != true;
let true4 = 1 !== true;
let false1 = 0 == false;
let false2 = 0 === false;
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

4. 논리 연산자 (&&, ||)
```js
let logical1 = true && true;
let logical2 = false || false;
```

5. 소괄호() 연산자
```js
let roundBracket1 = (1 === '1');
let roundBracket2 = ((1 + 2) * 3);
```
* ❕ `소괄호 연산자`는 `4칙 연산자`보다 우선 순위를 갖는다.
* ❔ 문제: `소괄호 연산자` 안에서 `true`와 `false`를 `일치 연산자`로 연산 후에 상수 `y`에 넣고, `y`를 `console.log`로 찍어 보기
* <details><summary>정답</summary>

  ```js
  const y = (true === false);
  console.log(y);
  ```
</details>

## if문(제어문 > 조건문)
1. 기본 구조
```js
if (조건1) {
  // 조건1이 참인 경우 실행
} else if (조건2) {
  // 조건2가 참인 경우 실행
} else if (조건3) {
  // 조건3이 참인 경우 실행
  // else if는 여러게 사용 가능
} else {
  // 해당 되는 조건이 없을 경우 실행
}
```
* 예제
```js
const if1 = 1;
if (if1 === 1) {
  console.log('참1');
} else if (if1 === 2 || if1 === 3) {
  console.log('참2 또는 참3');
} else if (if1 === 4 && true) {
  console.log('참4');
} else {
  console.log('거짓');
}
```
* 조건은 주로 연산자에서 `Boolean` 형식으로 받는다.
* `if1` 값을 수정하여 `참4`이 나오게 만들기

2. 거짓 조건 비교 하기
* ❕ 거짓 조건은 `false`, `0`, `null`, `undefined`, `NaN`이고, 나머지는 모두 참인 조건이 된다.
```js
debugger;
let d1;
// 선언 하고 값을 넣지 않으면 undefined
let d2 = null;
// 선언 하고 null 값을 넣으면 null
let condition1 = d1 == d2;
let condition2 = d1 === d2;
if (condition1) {
  console.log('참');
} else {
  console.log('거짓');
}
```
* ❔ 문제: 조건이 `1 === 1`인 `if`문을 만들고, 참인 경우 `console.log('참');`을 찍어 보기
* <details><summary>정답</summary>

  ```js
  if (1 === 1) {
    console.log('참');
  }
  ```
</details>

### 3항 연산자
```js
const condition3 = 1 === 1 ? 'a' : 'b';
```
* ❔ 문제: 조건이 `2 === 3`인 `3항 연산자`문을 만들고, 참인 경우 `'c'` 거짓인 경우 `'d'`를 `condition4` 상수에 넣어 보기
* <details><summary>정답</summary>

  ```js
  const condition4 = 2 === 3 ? 'c' : 'd';
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
const a1 = array1[0];
const a2 = array1[1];
const a3 = array1[2];

// 배열 Update
array1[0] = undefined;
array1[1] = false;
array1[2] = [1, 2, 3];

// 배열 Delete
array1.splice(0, 1);
array1.splice(1, 1);
array1.splice(2, 1);
```
* ❔ `배열의 CRUD` 부분 주석 처리하고, 개발자 도구 Console 창에서 `배열의 CRUD` 실행 해보기

### 배열의 크기
```js
const length1 = array1.length;
const length2 = array2.length;
const lastIndex = array2.length - 1;
const lastValue = array2[lastIndex];
```
* ❕ `lastValue`는 `array2` 배열의 마지막 요소의 값을 받는다.

### 배열의 성격
```js
let arr1 = [];
let arr2 = [];
// quiz1
if (arr1) {
  const result = '참';
  console.log(result);
} else {
  const result = '거짓';
  console.log(result);
}
const quiz2 = arr1 === arr2;
const quiz3 = arr1[5];
// quiz4
arr1[9] = 10;
```
* ❔ `빈 배열`은 참일까 거짓일까?
* ❔ 문제: `arr1`와 `arr2`는 같을까?
* <details><summary>정답</summary>

  https://ovdncids.github.io/javascript-curriculum/images/memory.png
  ```
  배열은 선언과 동시에 별도의 `메모리 공간`에 존재하고, 변수는 단지 해당 배열이 있는 `메모리 주소`를 가지고 있다.
  따라서 `arr1`과 `arr2`는 서로 다른 배열의 주소를 가지므로 같지 않다.
  만약 `arr1` 변수의 값을 변화 시킨다면, `메모리 주소`를 잃어 버리므로 해당 배열은 더이상 접근할 수 없게 된다.
  ```
</details>

* ❔ 해당 배열이 가진 `length`보다 큰 `index`를 `Read` 한다면?
* ❔ 해당 배열이 가진 `length`보다 큰 `index`를 `Update` 한다면?

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
const odd1 = testArray1[0] + testArray1[2] + testArray1[4];
```

* `testArray1` 짝수만 더하기
```js
const even1 = testArray1[1] + testArray1[3];
```

* 홀수만 지우기
```js
testArray1.splice(0, 1);
testArray1.splice(1, 1);
testArray1.splice(2, 1);
```

## for문(제어문 > 반복문)
for.html
```html
<script>
</script>
```

### for문을 사용하는 이유
1. 반복 작업을 한곳으로 묶기 위해 사용함 (주로 배열이 사용 된다.)

### for문 문법
1. 기본 구조
```js
for (초기문; 조건문; 증감문) {
  실행문;
  ...
}
```
* 예제
```js
for (let index1 = 0; index1 < 3; index1++) {
  console.log(index1);
}
```

2. break
```js
for (let index2 = 1; index2 <= 3; index2++) {
  console.log(index2);
  break;
}
```

3. continue
```js
for (let index3 = 1; index3 <= 3; index3 += 1) {
  console.log(index3);
  continue;
  console.log(index3);
}
```

* ❔ 문제: `초기문`, `조건문`, `증감문`을 이용하여 `1`부터 `10` 사이에 `홀수`만 `console.log`로 찍어 보기
* <details><summary>정답</summary>

  ```js
  for (let index4 = 1; index4 <= 10; index4 += 2) {
    console.log(index4);
  }
   ```
</details>

* ❔ 문제: `초기문`, `조건문`, `증감문`을 이용하여 `2`부터 `10` 사이에 `짝수`만 `console.log`로 찍어 보기
* <details><summary>정답</summary>

  ```js
  for (let index5 = 2; index5 <= 10; index5 += 2) {
    console.log(index5);
  }
  ```
</details>

### for문의 범위(Scope), Script 변수와 Block(Local) 변수의 차이
1. 초기문 사용하지 않기
```js
let index6 = 0;
for (; index6 < 3; index6++) {
  const blockConst = index6;
  console.log(blockConst);
}
console.log(index6);
```
* ❕ 결과적으로 `Script 변수 index6`은 for문이 반복된 횟수가 된다.
* ❔ `let index6 = 0;` `초기문`에 추가해 보기 (에러가 발생할지 생각해 보기)
* 가림 현상 설명 (VSCode에서 `index6` 마우스 오버해보기, Ctrl(또는 command) 키를 눌러서 해당 변수 이동)
* Block(Local) 변수 설명
* ❔ 문제: `Script 변수 total1`에 `0`을 넣고, `for문`을 이용해 `total1`에 1부터 5까지 더하고, `total1`을 `for문` 밖에서 `console.log`로 찍어 보기
* <details><summary>정답</summary>

  ```js
  let total1 = 0;
  for (let index7 = 1; index7 <= 5; index7++) {
    total1 += index7;
  }
  console.log(total1);
  ```
</details>

* ❔ 문제: `total1`의 `평균` 값을 구해 `avg1` 상수에 넣고, `avg1`을 `console.log`로 찍어 보기
* ❕ 힌트: 평균으로 나눌 `5`값을 얻는 과정이 중요 (변수 또는 상수를 여러개 사용해도 무관)
* <details><summary>정답</summary>

  ```js
  let total1 = 0;
  let index7 = 1;
  for (; index7 <= 5; index7++) {
    total1 += index7;
  }
  const count = index7 - 1;
  const avg1 = total1 / count;
  console.log(avg1);
  ```
  `total1 / 5 ` 이렇게 바로 나누었다면, 나중에 프로그램이 1에서 10까지로 변한다면, `5`값을 `2군데`에서 수정 해야 한다.
</details>

### for문에서 배열 사용하기
```js
const array1 = [1, 2, 3];
for (let index8 = 0; index8 < array1.length; index8++) {
  console.log(array1[index8]);
}
```
* ❔ 문제: `array2` 상수에 `빈 배열`을 넣고, 위에 for문을 이용해 `array2` 배열을 `[1, 2, 3]`으로 만들고, `array2`를 for문 밖에서 `console.log`로 찍어 보기
* <details><summary>정답</summary>

  ```js
  const array1 = [1, 2, 3];
  const array2 = [];
  for (let index8 = 0; index8 < array1.length; index8++) {
    array2.push(array1[index8]);
  }
  console.log(array2);
  ```
</details>

* ❕ 결과적으로 `array2`는 `array1`을 복사하였다.
* ❔ `array1 === array2` 참일까요?
* ❕ 메모리 설명
```js
let array3 = [1, 2, 3];
let array4 = array3;
```
* ❔ `array3 === array4` 참일까?
```js
array3 = 3;
array4 = 4;
```
* ❔ 문제: `array3`에서 사용하던 배열에 다시 접근할 수 있을까?
* <details><summary>정답</summary>

  없다. (따라서 배열은 `const`로 사용 해야한다.)
</details>

### index++와 ++index의 차이
```js
let index = 0;
const diff1 = index++;
const diff2 = ++index;
```

## 함수
function.html
```html
<script>
</script>
```

### 함수를 사용하는 이유
1. 여러 파일에서 동일한 작업을 하는 경우, 반복을 피할 수 있다
2. `DRY`(Don't repeat yourself)

### 함수 문법
1. 기본 구조
```js
// 선언부
const 함수명 = function(인자1, 인자2, ...) {
  실행문;
  ...
  return 반환값;
};

// 실행부
const 반환확인상수 = 함수명(인수1, 인수2, ...);
```

* 예제
```js
const func1 = function(argument1, argument2) {
  const sum1 = argument1 + argument2;
  return sum1;
};
const returned1 = func1('parameter1', 'parameter2');
```
* Console 창에서 `func1`, `returned1` 찍어 보기
* `breakpoint`로 진행 확인
* `func1(1, 2)` 실행해 보기
* ❔ 함수 안에 `return`이 없다면 `returned1`의 값은?
* ❔ `parameter2`를 넘기지 않는다면 `sum1`의 값은?
* ❔ `parameter1`, `parameter2` 둘다 넘기지 않는다면 `sum1`의 값은?
* `argument1`은 함수 내부적으로 `let argument1 = 인수1` 이렇게 작동 한다.
* ❔ `argument2`를 지운다면 `sum1`의 값은?
* ❔ `argument1`, `argument2` 둘다 지운다면 `sum1`의 값은?

2. 인수에 자료형 데어터 넘기기
```js
const scriptConst2 = 'a';
const func2 = function(argument1) {
    const compare1 = scriptConst2 === argument1;
    argument1 = 'b';
    const compare2 = scriptConst2 === argument1;
}
func2(scriptConst2);
```
* ❔ `compare2`는 `참`일까, `거짓`일까?

3. 인수에 배열 넘기기
```js
const scriptConst3 = [];
const func3 = function(argument1) {
    const compare1 = scriptConst3 === argument1;
    argument1.push('a');
    const compare2 = scriptConst3 === argument1;
}
func3(scriptConst3);
```
* ❔ `compare2`는 `참`일까, `거짓`일까?

4. 인수에 함수 넘기기
```js
const scriptConst4 = function() {};
const func4 = function(argument1) {
    const compare1 = scriptConst4 === argument1;
    argument1 = function() {};
    const compare2 = scriptConst4 === argument1;
}
func4(scriptConst4);
```
* ❔ `compare2`는 `참`일까, `거짓`일까?
* 익명 함수를 인수로 넘기기
  ```diff
  - func4(scriptConst4);
  ```
  ```js
  func4(function() {
    console.log('익명함수 실행');
  });
  ```
* ❔ 문제: `인수`로 넘긴 `익명 함수`를, `인자`로 실행 시키기
* <details><summary>정답</summary>

  ```js
  argument1();
  // 인수로 함수를 넘기고, 인자로 실행시키는 함수를 `콜백 함수`(Callback function)라 한다.
  ```
</details>

5. 라이브러리: 특정 함수의 모음 (Moment.js, Lodash)

### 함수 실습 (회원 CRUD 만들기)
membersFunction.html
```html
<script>
</script>
```

* [데모](https://ovdncids.github.io/javascript-curriculum/membersFunction.html)
* Console 창에서 실행
```js
// Create
membersCreate('홍길동')

// Read
membersRead()

// Update
membersUpdate(0, '김유신')

// Delete
membersDelete(0)
```

1. Create
```js
const members = [];

const membersCreate = function(member) {
  members.push(member);
  return members;
};
```

2. Read
```js
const membersRead = function() {
  return members;
};
```

3. Delete
```js
const membersDelete = function(index) {
  members.splice(index, 1);
  return members;
};
```

4. Update
```js
const membersUpdate = function(index, member) {
  members[index] = member;
  return members;
};
```

* `배열의 CRUD`를 참조 하여, `membersFunction2.html` 파일을 생성하고, 처음 부터 코딩 해보기

## 오브젝트 (객체)

object.html
```html
<script>
</script>
```

### 오브젝트를 사용하는 이유
1. 효율적인 관리를 위해 여러 변수를 한곳에 묶어서 사용한다

### 배열과 오브젝트의 차이점
* ❕ 배열은 숫자(index)로 요소에 접근하고, 오브젝트는 문자(key)로 요소에 접근한다.

### 오브젝트 문법
1. 기본 구조
```js
const 오브젝트명 = {
  키1: 값1,
  키2: 값2  
}
```

https://ovdncids.github.io/javascript-curriculum/images/object.jpeg

* 예제
```js
const object1 = {};
const object2 = {
  key1: 'value1',
  key2: [1, 2, 3],
  key3: function() {
    return this;
  },
  key4: {
    k1: 'v1',
    k2: 'v2'
  }
};
```

### 오브젝트의 CRUD
```js
// 오브젝트 Create
object1.key1 = 1;
object1.key2 = '2';
object1.key3 = '삼';

// 오브젝트 Read
const o1 = object1.key1;
const o2 = object1.key2;
const o3 = object1.key3;

// 오브젝트 Update
object1.key1 = [];
object1.key2 = function() {};
object1.key3 = {};

// 오브젝트 Delete
delete object1.key1;
delete object1.key2;
delete object1.key3;
```
* ❔ `오브젝트의 CRUD` 부분 주석 처리하고, 개발자 도구 Console 창에서 `오브젝트의 CRUD` 실행 해보기
* ❔ `object2.key2` 배열의 `length` 구하기
* ❔ `object2.key3` 함수 실행 시키기
* ❔  this 실행 시키기, this의 개념 설명
* ❔ `object2.key4` 오브젝트의 `k1`키 삭제 하기

* ❕ `키`이름에 대한 규칙
```
`영문, 숫자, _, $`를 자유롭게 조합해서 쓸 수 있다.
숫자를 앞으로 사용 불가 (1a, 2b, ...)
```

### 오브젝트의 for in문
```js
for (let key5 in object2) {
  const value5 = object2[key5];
  console.log(key5, value5);
}
```

### Object.keys 메소드 확인
```js
const array2 = Object.keys(object2);
array2.length;
```

### 오브젝트 실습 (회원 CRUD 사용)

* [데모](https://ovdncids.github.io/javascript-curriculum/membersFunction.html) 또는 membersFunction.html 파일 실행 시키기

* Console 창에서 실행
```js
// Create
membersCreate({
  name: '홍길동',
  age: 20
})

// Read
membersRead()

// Update
membersUpdate(0, {
  name: '김유신',
  age: 30
})

// Delete
membersDelete(0)
```

## try catch문(제어문 > 예외처리문)
### try catch문을 사용하는 이유?
1. 에러가 발생할 경우 처리를 위해 사용한다
2. try문 밖에서 에러가 발생할 경우 프로그램 진행이 멈추지만, try문 안에서 발생할 경우 프로그램이 계속 진행 된다.

* 기본 구조
```js
try {
  실행문;
  ...
} catch(에러객체) {
  // try block에서 에러가 발생할 경우 실행
  실행문;
  ...
}
```
* 예제
```js
try {
  t1;
} catch(error) {
  console.warn(error);
  console.error(error);
}
console.log('진행 가능');
```
