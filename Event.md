# Event
## onkeypress
```html
<input type="text" onkeyup="console.log(event)" />
```
```js
event.target.value;
```

## onchange
```html
<input type="date" onchange="console.log(event)" />
```
```js
event.currentTarget.value;
```

## activeElement
* focus된 엘리먼트를 반환한다. focus가 된곳이 없다면 `<Body>` 또는 `<html>`을 반환한다.
```js
const activeElement = document.activeElement;
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

## class 추가 삭제
```js
// 추가
document.getElementById('').classList.add('');
// 삭제
document.getElementById('').classList.remove('');
// 토글 클래스
document.getElementById('').classList.toggle('active');
// 첫번째 클래스명
document.getElementById('').classList[0];
// 클래스 개수
document.getElementById('').classList.length;
```

# Form
## input에서 엔터 눌렀을 때 button의 onclick이 실행 되는 경우
```html
<form>
  <input>
  <button type="button" onclick="alert('실행');">button</button>
  <!-- button 태그에 type="button"이 없으면 input 태그 안에서 enter을 누르면 alert('실행')이 실행 된다 -->
</form>
```

## input file에서 선택한 이미지, 임시로 보여주기
```html
<script>
const changeFile = function(inputFile) {
  document.getElementById('image').src = URL.createObjectURL(inputFile.files[0]);
}
</script>
<input type="file" onchange="changeFile(this)" />
<img id="image" />
```

## input select placeholder
```html
<option disabled selected hidden>placeholder</option>
```
