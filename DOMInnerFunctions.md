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
<input type="text" onkeypress="console.log(event)" />
```

### onchange
```html
<input type="date" onchange="console.log(event)" />
```
