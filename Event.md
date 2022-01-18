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

# 팝업창 닫혔는지 확인
```js
const popup = window.open('');
let popupClose = null;
popupClose = setInterval(function() {
  if (!popup.closed) return;
  clearInterval(popupClose);
  console.log('팝업창 닫힘');
});
```

# Layer Popup
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Layer Popup</title>
  <script src="./index.js"></script>
  <style>
    .layer-popup {
      display: none;
    }
    .layer-popup.active {
      display: block;
    }
  </style>
</head>
<body>
  <div>
    <input onclick="layerPopup('div-layer-popup1')">
    <div
      id="div-layer-popup1" class="layer-popup"
      style="background-color: #235bb6;" onclick="event.stopPropagation();"
    >
      레이어 팝업1
    </div>
  </div>
  <div>
    <input onclick="layerPopup('div-layer-popup2')">
    <div
      id="div-layer-popup2" class="layer-popup"
      style="background-color: #EA4335;" onclick="event.stopPropagation();"
    >
      레이어 팝업2
      <span onclick="document.body.click()">X</span>
    </div>
  </div>
</body>
</html>
```

index.js
```js
const layerPopup = function(id) {
  const callback = function() {
    return document.getElementById(id).classList.toggle('active');
  };
  layerPopupToggle(id, callback);
};

const layerPopupToggle = function(id, callback) {
  if (!window.layerPopup) window.layerPopup = {
    click: {},
    esc: {}
  };
  if (window.layerPopup.click[id]) return;
  window.layerPopup.click[id] = function() {
    const isShow = callback();
    if (!isShow) layerPopupRemoveEvent(id);
  };
  window.layerPopup.esc[id] = function(event) {
    if (event.key === 'Escape') {
      callback();
      layerPopupRemoveEvent(id);
    }
  };
  document.addEventListener('click', window.layerPopup.click[id]);
  document.addEventListener('keydown', window.layerPopup.esc[id]);
};

const layerPopupRemoveEvent = function(id) {
  document.removeEventListener('click', window.layerPopup.click[id]);
  document.removeEventListener('keydown', window.layerPopup.esc[id]);
  window.layerPopup.click[id] = null;
  window.layerPopup.esc[id] = null;
};
```

index.vue
```vue
<template>
  <div>
    <div>
      <input @click="layerPopup('divLayerPopup1')">
      <div
        class="layer-popup" :class="{active: divLayerPopup1}"
        style="background-color: #235bb6" @click.stop=""
      >
        레이어 팝업1
      </div>
    </div>
    <div>
      <input @click="layerPopup('divLayerPopup2')">
      <div
        class="layer-popup" :class="{active: divLayerPopup2}"
        style="background-color: #EA4335" @click.stop
      >
        레이어 팝업2
        <span onclick="document.body.click()">X</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      divLayerPopup1: false,
      divLayerPopup2: false
    }
  },
  methods: {
    layerPopup: function(id) {
      const callback = () => {
        return this[id] = !this[id]
      }
      layerPopupToggle(id, callback)
    }
  }
}

const layerPopupToggle = function(id, callback) {
  if (!window.layerPopup) window.layerPopup = {
    click: {},
    esc: {}
  }
  if (window.layerPopup.click[id]) return
  window.layerPopup.click[id] = function() {
    const isShow = callback()
    if (!isShow) layerPopupRemoveEvent(id)
  }
  window.layerPopup.esc[id] = function(event) {
    if (event.key === 'Escape') {
      callback()
      layerPopupRemoveEvent(id)
    }
  }
  document.addEventListener('click', window.layerPopup.click[id])
  document.addEventListener('keydown', window.layerPopup.esc[id])
}

const layerPopupRemoveEvent = function(id) {
  document.removeEventListener('click', window.layerPopup.click[id])
  document.removeEventListener('keydown', window.layerPopup.esc[id])
  window.layerPopup.click[id] = null
  window.layerPopup.esc[id] = null
}
</script>

<style>
.layer-popup {
  display: none;
}
.layer-popup.active {
  display: block;
}
</style>
```

# JSON
## Query string으로 JSON 형식 보낼때 textarea에서 보내는 특수문자 처리
```js
// 보낼때
const object = {
  specialCharacter: encodeURIComponent(encodeURIComponent('`~!@#$%^&*()-_=+[{]}\|;:\'",<.>/?'))
};

// 받고 사용할때
decodeURIComponent(object.specialCharacter);
```

# 부가가치세 계산식
```js
Math.floor(10000 / 11);
```
