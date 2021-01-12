# Key Popup

## Markup
keyPopup.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Key Popup</title>
    <link rel="stylesheet" type="text/css" href="keyPopup.css">
    <script src="keyPopup.js"></script>
  </head>
  <body>
    <h1>Key Popup</h1>
    <div id="popupBody">
      <h2>Popup</h2>
      <div>
        <div id="popupKeyShift">&#x1F3AE;</div>
        <div id="popupKeyCtrl">&#x1F3B8;</div>
        <div id="popupKeyAlt">&#x1F3C2;</div>
        <div>
          <span><button id="popupButtonCancel" onclick="eventCancel(event)">Cancel</button></span>
          <span><button id="popupButtonConfirm" onclick="eventConfirm(event)">Confirm</button></span>
        </div>
      </div>
    </div>
  </body>
</html>

```

keyPopup.css
```css
#popupBody {
  border: #aaaaaa 1px solid;
  display: none;
}

#popupKeyShift {
  display: none;
}

#popupKeyCtrl {
  display: none;
}

#popupKeyAlt {
  display: none;
}

```

## 기능 개발
keyPopup.js
```js
window.popupOpen = false;

function eventCancel(event) {
  console.log(event);
  console.log('Cancel');
  window.popupOpen = false;
  document.getElementById('popupBody').style.display = 'none';
}

function eventConfirm(event) {
  console.log(event);
  console.log('Confirm');
  window.popupOpen = false;
  document.getElementById('popupBody').style.display = 'none';
}

document.onkeydown = function (event) {
  if (event.keyCode === 73 /* i key */) {
    if (!document.getElementById('popupBody').style.display || document.getElementById('popupBody').style.display === 'none') {
      window.popupOpen = true;
      document.getElementById('popupBody').style.display = 'block';
    }
    if (event.shiftKey) {
      document.getElementById('popupKeyShift').style.display = 'block';
    } else if (event.ctrlKey) {
      document.getElementById('popupKeyCtrl').style.display = 'block';
    } else if (event.altKey) {
      document.getElementById('popupKeyAlt').style.display = 'block';
    }
  } else if (event.keyCode === 88 /* x key */ && window.popupOpen) {
    eventConfirm(event);
  } else if (event.key === 89 /* y key */ && window.popupOpen) {
    eventCancel(event);
  }
}

```

## 클릭을 이용한 이벤트 호출 방법
```diff
- eventConfirm(event);
+ document.getElementById('popupButtonConfirm').click();

- eventCancel(event);
+ document.getElementById('popupButtonCancel').click();
```
