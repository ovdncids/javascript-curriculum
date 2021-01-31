# Babel
https://babeljs.io

babel.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Babel</title>
    <script defer src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script defer src="./js/babel.js" type="text/babel"></script>
  </head>
  <body>
  </body>
</html>
```

babel.js
```js
console.log(`abc`);
```

## Arrow Function(화살표 함수)
* 기본
```js
const f1 = function() {};
const fBabel1 = () => {};
```

* 응용
```js
const f2 = function(a) {
  return a;
};
const fBabel2 = (a) => { return a };
const fBabel3 = a => { return a };
const fBabel4 = a => a;

console.log(fBabel2(1));
console.log(fBabel3(2));
console.log(fBabel4(3));
```
