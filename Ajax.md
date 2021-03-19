# Ajax
* 2000년 초반까지 서버와 통신할 경우 페이지 이동이 필요 했는데(form 태그 사용), Ajax를 이용하면 페이지 이동 없이 통신이 가능하다.
* GET과 POST만 사용 할 수 있던 기존 통신 METHOD에서, OPTION, PATCH, PUT, DELETE 등 다양한 METHOD를 이용해 REST API 통신이 유행됐다.

## 구조
```js
const xhrObject = new XMLHttpRequest();
xhrObject.onreadystatechange = function() {
  if (xhrObject.readyState !== 4) return;
  if (xhrObject.status === 200) {
    // 통신 완료 후 실행할 부분
    console.log('Done', xhrObject.responseText);
  } else {
    // 통신 도중 에러가 발생 할때 실행할 부분
    const error = {
      status: xhrObject.status,
      statusText: xhrObject.statusText,
      responseText: xhrObject.responseText
    }
    console.error(error);
  }
};
xhrObject.open('METHOD', 'http://url');
// Content-Type이 없으면 xhrObject.send로 넘기는 값을 서버에서 못 읽음
xhrObject.setRequestHeader('Content-Type', 'application/json');
xhrObject.send(JSON.stringify({}));
```

## template 파일을 불러 오기
ajax/basicTemplate.html
```html
<div>
  <form method="get" onsubmit="alert(this['template'].value); return false;">
    <input type="text" name="template" value="Ajax done" placeholder="Name">
    <input type="submit" value="Alert">
  </form>
</div>
```

### VSCode 확장 `Live Server` 설치

ajax/basicAjax.html
```html
<body>
  <div><button onclick="ajaxTest()">Ajax run</button></div>
  <div id="tag-div"></div>
</body>
<script>
const ajaxTest = function() {
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function() {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      console.log('Done', xhrObject.responseText);
      const tagDiv = document.getElementById('tag-div');
      tagDiv.innerHTML = xhrObject.responseText;
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('GET', './basicTemplate.html');
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send();
};
</script>
```
* ❔ `xhrObject.open` url을 `./basicTemplate2.html`로 바꾼다면

