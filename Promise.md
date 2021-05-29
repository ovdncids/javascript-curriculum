# Promise

## Promise란
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

**언제 완료 될지 모르는 여러 쓰레드를 기다려다가 모두 완료 되면 처리하는 내장 함수**

## 기본 문법
```js
const promise1 = new Promise(function(resolve, reject) {
  // resolve('Resolved promise1');
  reject('Rejected promise1');
})
const promise2 = new Promise(function(resolve, reject) {
  // resolve('Resolved promise2');
  reject('Rejected promise2');
})
Promise.all([promise1, promise2]).then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.error(error);
})
```

### Case1
하나의 프로미쓰라도 reject 메소드가 실행 되었다면 다른 프로미쓰를 기다리지 않고 바로 catch 메소드 실행됨

### Case2
모든 프로미쓰가 resolve 메소드를 실행 할 경우 then 메소드가 실행 됨

## Axios 대입
```js
const promise = []
promise[0] = new Promise(function(resolve, reject) {
  axios.get('http://localhost:3100/api/v1/members').then(function(response) {
    resolve(response.data);
  }).catch(function(error) {
    reject(error);
  })
})
promise[1] = new Promise(function(resolve, reject) {
  axios.get('http://localhost:3100/api/v1/members').then(function(response) {
    resolve(response.data);
  }).catch(function(error) {
    reject(error);
  })
})
Promise.all(promise).then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.error(error);
})
```

## Promise Polyfill for IE11
```html
<script src="https://unpkg.com/core-js-bundle@3.6.0/minified.js"></script>
```
