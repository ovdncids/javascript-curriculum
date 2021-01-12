# Holding Long Key

## Markup
holdingLongKey.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Holding Long Key</title>
    <link rel="stylesheet" type="text/css" href="holdingLongKey.css">
    <script src="holdingLongKey.js"></script>
  </head>
  <body>
    <h1>Holding Long Key</h1>
    <div id="popupBody">
      <h2>Popup Progress</h2>
      <div>
        <span name="popupProgresses" class="d-none">&#x23E9;</span>
        <span name="popupProgresses" class="d-none">&#x23E9;</span>
        <span name="popupProgresses" class="d-none">&#x23E9;</span>
        <span name="popupProgresses" class="d-none">&#x23E9;</span>
        <span name="popupProgresses" class="d-none">&#x23E9;</span>
        <span name="popupProgresses" class="d-none">&#x23E9;</span>
        <span name="popupProgresses" class="d-none">&#x23E9;</span>
        <span name="popupProgresses" class="d-none">&#x23E9;</span>
        <span name="popupProgresses" class="d-none">&#x23E9;</span>
        <span name="popupProgresses" class="d-none">&#x1F44C;</span>
      </div>
    </div>
  </body>
</html>

```

holdingLongKey.css
```css
#popupBody {
  border: #aaaaaa 1px solid;
  display: none;
}

.d-none {
  display: none;
}

```

## 키 홀딩 후 완료 까지만
holdingLongKey.js
```js
window.popupGauge = -1;
window.popupSpeed = 10;
window.popupDone = false;

function progressing() {
  if (window.popupGauge >= 0) {
    document.getElementById('popupBody').style.display = 'block';
  }
  var popupProgresses = document.getElementsByName('popupProgresses');
  for (var i = 0; i < popupProgresses.length; i += 1) {
    if (window.popupGauge >= i * window.popupSpeed) {
      popupProgresses[i].className = '';
    } else {
      popupProgresses[i].className = 'd-none';
    }
  }
  if (window.popupGauge + window.popupSpeed >= i * window.popupSpeed && !window.popupDone) {
    window.popupDone = true;
    console.log('Done');
  }
}

// 키를 누르고 있을 때 발생
document.onkeydown = function (event) {
  if (event.keyCode === 73 /* i key */ && !window.popupDone) {
    window.popupGauge += 1;
    progressing();
  }
}

```

## 키 홀딩 후 키를 띄면 역진행
holdingLongKeyWithBack.js
```js
window.popupGauge = -1;
window.popupSpeed = 10;
window.popupDone = false;
window.popupInterval = null;

function progressing() {
  if (window.popupGauge >= 0) {
    document.getElementById('popupBody').style.display = 'block';
  }
  var popupProgresses = document.getElementsByName('popupProgresses');
  for (var i = 0; i < popupProgresses.length; i += 1) {
    if (window.popupGauge >= i * window.popupSpeed) {
      popupProgresses[i].className = '';
    } else {
      popupProgresses[i].className = 'd-none';
    }
  }
  if (window.popupGauge + window.popupSpeed >= i * window.popupSpeed && !window.popupDone) {
    window.popupDone = true;
    console.log('Done');
  }
}

function progressingBack() {
  var backFunction = function () {
    if (window.popupGauge < window.popupSpeed) {
      window.clearInterval(window.popupGaugeInterval);
      document.getElementById('popupBody').style.display = 'none';
    }
    window.popupGauge -= window.popupSpeed;
    progressing();
  }
  window.popupGaugeInterval = window.setInterval(backFunction, 500);
}

// 키를 누르고 있을 때 발생
document.onkeydown = function (event) {
  window.clearInterval(window.popupGaugeInterval);
  if (event.keyCode === 73 /* i key */ && !window.popupDone) {
    window.popupGauge += 1;
    progressing();
  }
}

// 키를 눌렀다가 띌때 발생
document.onkeyup = function (event) {
  if (event.keyCode === 73 /* i key */ && !window.popupDone) {
    progressingBack();
  }
}

```

## 키 홀딩 후 키를 띄면 역진행 jQuery
holdingLongKey.html
```html
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
```

holdingLongKeyWithBack.js
```diff
- document.getElementById('popupBody').style.display = 'block';
+ $('#popupBody').css('display', 'block');

- var popupProgresses = document.getElementsByName('popupProgresses');

- for (var i = 0; i < popupProgresses.length; i += 1) {
-   if (window.popupGauge >= i * window.popupSpeed) {
-     popupProgresses[i].className = '';
-   } else {
-     popupProgresses[i].className = 'd-none';
-   }
- }
+ var popupProgresses = $('span[name=popupProgresses]').each(function (i) {
+   if (window.popupGauge >= i * window.popupSpeed) {
+     $(this).removeClass('d-none');
+   } else {
+     $(this).addClass('d-none');
+   }
+ });

- if (window.popupGauge + window.popupSpeed >= i * window.popupSpeed && !window.popupDone) {
+ if (window.popupGauge + window.popupSpeed >= popupProgresses.length * window.popupSpeed && !window.popupDone) {

- document.getElementById('popupBody').style.display = 'none';
+ $('#popupBody').css('display', 'none');

```
