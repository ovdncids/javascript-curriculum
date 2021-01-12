# jQuery Functions

## Markup
jQueryFunctions.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>jQuery Functions</title>
    <link rel="stylesheet" type="text/css" href="jQueryFunctions.css">
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
    <script src="jQueryFunctions.js"></script>
  </head>
  <body>
    <h1 onclick="togglePopup()" class="pointer">Toggle Popup</h1>
    <div id="popupToggle" class="d-none border">
      <div>
        <div>&#x1F3AE;</div>
      </div>
    </div>
    <h1 onclick="animatePopup()" class="pointer">Animate Popup</h1>
    <div id="animateToggle" class="border">
      <div>
        <div>&#x1F3B8;</div>
      </div>
    </div>
    <h1 onclick="forEachPopup()" class="pointer">For Each Popup</h1>
    <div id="forEachToggle" class="d-none border">
      <div>
        <div class="skyer d-none">&#x1F3C2;</div>
        <div class="skyer d-none">&#x1F3C2;</div>
        <div class="skyer d-none">&#x1F3C2;</div>
      </div>
    </div>
  </body>
</html>

```

jQueryFunctions.css
```css
.border {
  border: #aaaaaa 1px solid;
}

.d-none {
  display: none;
}

.pointer {
  cursor: pointer;
}

```

## Functions
jQueryFunctions.js
```js
window.animateOpacity = true;

function togglePopup() {
  console.log($('.popupToggle'))
  $('#popupToggle').eq(0).toggle();
  // $('#popupToggle').eq(0).fadeToggle();
  // $('#popupToggle').eq(0).slideToggle();
}

function animatePopup() {
  if (window.animateOpacity) {
    $('#animateToggle').hide(400);
    // $('#animateToggle').animate({ opacity: 0 }, 'slow');
    // $('#animateToggle').animate({ opacity: 0 }, 'slow', togglePopup);
  } else {
    $('#animateToggle').show(400);
    // $('#animateToggle').animate({ opacity: 1 }, 'fast');
    // $('#animateToggle').animate({ opacity: 1 }, 'fast', togglePopup);
  }
  window.animateOpacity = !window.animateOpacity;
}

function forEachPopup() {
  var forEachToggle = $('#forEachToggle').toggle();
  if (forEachToggle.css('display') === 'block') {
    $('.skyer').each(function (i) {
      console.log(i, this)
      $(this).toggle();
    });
  }
}

```
