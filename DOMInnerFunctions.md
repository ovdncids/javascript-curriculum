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
