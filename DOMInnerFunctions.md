# DOM Inner Functions

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
