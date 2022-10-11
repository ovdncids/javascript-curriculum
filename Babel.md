# Babel
https://babeljs.io

babel.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Babel</title>
<script defer src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script defer type="text/babel">
</script>
</head>
<body>
```

## 문자 안에 변수 넣기 (Grave accent: 빽틱)
```js
const number1 = 10;
const string1 = `총 개수는 ${number1}개 입니다.`;
```

## Arrow Function(화살표 함수)
* 기본
```js
const f1 = function() {};
const fBabel1 = () => {};
```

* 응용
```js
const f2 = function(a) {
  return a;
};
const fBabel2 = (a) => { return a };
const fBabel3 = a => { return a };
const fBabel4 = a => a;

console.log(fBabel2(1));
console.log(fBabel3(2));
console.log(fBabel4(3));
```

## 옵셔널 체이닐 (Optional chaining: 선택적 연결)
* 있을지 모르는 오브젝트 요소의 값 Read 하기
```js
const object1 = {};
const o1 = object1?.key1;
```
* 있을지 모르는 오브젝트 메소드 실행
```js
const object2 = {};
const o2 = object2?.key2?.();
// object2.key2가 없으므로 o2값은 undefined이 된다.
```

## 널 병합 연산자 (Nullish coalescing operator)
```js
const defaultValue1 = null ?? undefined ?? false ?? 0;
const defaultValue2 = null ?? undefined ?? 0 ?? false;
// null 또는 undefined일 경우 ?? 뒤에 값이 기본 값이 된다.
```

## 전개 구조 (Spread Operator)
### 배열 복사
```js
const array1 = [1, 2, 3, 4, 5];
const array2 = [...array1, ...array1];
```

### 배열 만큼의 변수 생성 (비구조화 할당)
```js
let [v1, v2, v3, ...rest] = array1;
```

### 오브젝트 복사
```js
const object3 = {
  key1: 'abc'
};
const object4 = {
  ...object3
};
const condition1 = object3 === object4;

// 상수 이름 바꾸어서 받기
const { key1: key2 } = object3;
```
