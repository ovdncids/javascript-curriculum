# 콜백 함수

## 정의
* 인수값(Argument): 인수(因數) 또는 어규먼트라 부르고, 함수를 호출 할때 넘기는 값들이다.
* 인자값(Parameter): 인자(因子) 또는 파라미터 또는 매개변수라 부르고, 함수가 호출 되고 넘겨 받은 값들을 해당 이름으로 사용한다.
```js
const a = function(parameter) {
  // 인자: parameter
}

// 인수: 'argument'
a('argument');
```
* 콜백 함수: a함수가 끝나고, 호출될 b함수. *필수 조건: a함수는 꼭 콜백함수인 b를 인자로 받아야 한다.
```js
const a = function(b) {
  // a함수가 끝나고, 호출될 콜백 함수 실행
  b();
};
const b = function() {
  console.log('콜백 함수 실행);
};

// a함수 실행
a(b);
```

## 상황
* 협업 중인 A와 B 개발자가 있다.
* A는 <cavas> 태그를 이용하여 도형(삼각형, 사각형)을 만들고, B는 여러 페이지에 A가 만든 도형을 보여주는 일을 맡았다
* A는 작업을 마치고 자신이 만든 도형을 부를 수있는 함수를 B에게 알려주는데 ...

## B 개발자 코드
### canvas.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Canvas</title>
    <script defer src="./js/canvas.js"></script>
  </head>
  <body>
    <div>
      <canvas id="canvas" width="370" height="130" style="border: 2px gray solid;"></canvas>
    </div>
    <div id="result"></div>
    <div>
      <button id="button-call-canvas-nemo" onclick="callCanvasNemo()">사각형 부르기</button>
      <button id="button-call-canvas-won" onclick="callCanvasWon()">원 부르기</button>
    </div>
  </body>
</html>
```

### canvas.js


## 문제
* 도형을 부르기 전에 버튼을 disabled 처리하고, 도형이 완료 되면 disabled 해제 하기
```js
document.getElementById('button-call-canvas').disabled = true;
```
