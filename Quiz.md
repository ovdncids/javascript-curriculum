# Quiz
## 문제1
quiz1.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz1</title>
  <script defer src="./quiz1.js"></script>
</head>
<body>
  <form onsubmit="return false;">
    <input type="text" name="input-original" placeholder="원본" value="">
    <button onclick="copy();">복사</button>
    <input type="text" name="input-copy" placeholder="복사본1" value="">
    <input type="text" name="input-copy" placeholder="복사본2" value="">
  </form>
</body>
</html>
```

quiz1.js
```
const copy = function() {
  console.log('copy');
}
```
* ❔ 문제: `원본 input box`에 값을 입력 후 `복사 버튼`을 누르면, `복사본1 input box`와 `복사본2 input box`에 `원본 input box`의 값을 넣기

## 문제2
quiz2.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz2</title>
  <script defer src="./quiz2.js"></script>
</head>
<body>
  <input type="text" name="input-child" placeholder="원본" value="">
  <button onclick="copy();">복사</button>
  <div id="div-parent"></div>
</body>
</html>
```

quiz2.js
```
const copy = function() {
  console.log('copy');
}
```
* ❔ 문제: `원본 input box`에 값을 입력 후 `복사 버튼`을 누르면, `div`태그 안으로 `원본 input box`태그를 복사해서 넣기

