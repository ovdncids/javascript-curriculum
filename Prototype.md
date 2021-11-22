# Prototype
* 모든 자료형은 `window.Object.prototype`를 상속 받는다.
* `window.Object.prototype`에 속성(변수)을 추가하면 모든 자료형에서 해당 속성을 읽을 수 있다.
```js
// Object
const obj = {};
const compare1 = obj.__proto__ === window.Object.prototype;

// Object prototype에 속성 추가
window.Object.prototype.obj1 = 'Object attribute';

// Object prototype 속성 읽기
console.log(obj.obj1);
```

* `window.Array.prototype`, `window.String.prototype`, `window.Number.prototype`, `window.Boolean.prototype`, `window.Function.prototype` 역시 `window.Object.prototype`를 상속 받는다.
```js
// Array
const arr = [];
const compare2 = arr.__proto__ === window.Array.prototype;

// String
const str = '';
const compare3 = str.__proto__ === window.String.prototype;

// Number
const num = 0;
const compare4 = num.__proto__ === window.Number.prototype;

// Boolean
const bool = false;
const compare5 = bool.__proto__ === window.Boolean.prototype;

// Function
const func = function() {};
const compare6 = func.__proto__ === window.Function.prototype;
```

* 문제
```js
window.Array.prototype.arr1 = 'Array attribute';
arr.obj1;
arr.arr1;
obj.arr1;
```
* ❔ `arr.obj1` 값은?
* ❔ `arr.arr1` 값은?
* ❔ `obj.arr1` 값은?
